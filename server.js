const gatsbyExpress = require("gatsby-plugin-express")
const express = require("express")
var cors = require("cors")
const path = require("path")
const fs = require("fs")
var walk = require("walk")
var _ = require("lodash")
const app = express()

// gatsby middleware

const gatsby = gatsbyExpress("config/gatsby-express.json", {
  publicDir: "public/",

  // redirects all /path/ to /path
  // should be used with gatsby-plugin-remove-trailing-slashes
  redirectSlashes: true,
})

app.use(cors())

// serve static files before gatsbyExpress
app.use(express.static("public/"))

app.get("/qna", (req, res) => {
  let questions = []
  let answers = []

  // Walker options
  let walker = walk.walk("./src/images/exam", { followLinks: false })

  walker.on("file", function (root, stat, next) {
    let obj = {}
    let file = root.replace(/\\/g, "/") + "/" + stat.name
    let fileName = file.replace("./src/images/exam/", "")
    const qid = stat.name.match(/[0-9]{1,9}/)
      ? stat.name.match(/[0-9]{1,9}/)[0]
      : null
    const answer = stat.name.match(/a[0-9]{1,9}/) ? true : false

    if (qid && !answer) {
      obj.qid = +qid
      obj.question = fileName
      questions.push(obj)
    }

    if (qid && answer) {
      obj.qid = +qid
      obj.answer = fileName
      answers.push(obj)
    }

    next()
  })

  walker.on("end", function () {
    // console.log(files)
    questions.map(q => {
      // q.qid = _.padStart(q.qid, 2, "0")
      answers.forEach(ans => {
        if (q.qid == ans.qid) q.answer = ans.answer
      })
    })
    questions = _.sortBy(questions, ["qid"])

    res.send(questions)
  })
})

app.use("/", gatsby)

app.listen(3000, function () {
  console.log("App started on port 3000")
})
