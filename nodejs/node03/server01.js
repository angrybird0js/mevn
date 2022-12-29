const express = require('express')
const path = require('path')
const logger = require('morgan')
const multer = require('multer')
const app = express()
const port = 3000

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

const _path = path.join(__dirname, '/')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, _path)
  },
  filename: (req, res, cb) => {
    let on = res.originalname
    cb(null, on)
  }
})

let upload = multer({ storage: storage })

app.post('/up', upload.single('ufile'), (req, res) => {
  console.log(req.file)
  res.send(`<script>alert("파일 저장완료!");history.go(-1)</script>`)
})

app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
