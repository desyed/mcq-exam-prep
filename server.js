const gatsbyExpress = require("gatsby-plugin-express")
const express = require("express")
var cors = require("cors")
const path = require("path")
const fs = require("fs")
var walk = require("walk")
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
  var questions = []
  var answers = []

  // Walker options
  var walker = walk.walk("./static", { followLinks: false })

  walker.on("file", function (root, stat, next) {
    let obj = {}
    let file = root.replace(/\\/g, "/") + "/" + stat.name
    let fileName = file.replace("./static/", "")
    const id = stat.name.match(/[0-9]/) ? stat.name.match(/[0-9]/)[0] : null
    const answer = stat.name.match(/a[0-9]/) ? true : false

    if (id && !answer) {
      obj.id = +id
      obj.question = fileName
      questions.push(obj)
    }

    if (id && answer) {
      obj.id = +id
      obj.answer = fileName
      answers.push(obj)
    }

    next()
  })

  walker.on("end", function () {
    // console.log(files)
    questions.map(q => {
      answers.forEach(ans => {
        if (q.id == ans.id) q.answer = ans.answer
      })
    })
    res.send(questions)
  })
})

app.use("/", gatsby)

app.listen(3000, function () {
  console.log("App started on port 3000")
})
