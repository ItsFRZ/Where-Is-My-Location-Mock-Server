const express = require('express')
const app = express()
const port = 3000
const baseURL = "/mock/fused/"

var employeeDataList = []

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post(baseURL+"", (req, res) => {
  console.log("Server :: POST : Log Upload Request")
  console.log(req.body)
  employeeDataList.push(req.body)
})

app.get(baseURL+"", (req, res) => {
  console.log("Server :: GET : Get Log Request")

  res.send({
    "status" : 200,
    "message" : "completed",
    "result" : employeeDataList
  })
})

app.delete(baseURL+":id", (req, res) => {
  console.log("Server :: DELETE : Delete Log With Id "+req.params.id+" Request")

  let index = employeeDataList.findIndex(element => element.employeeId === req.params.id);
  if (index !== -1) {
    employeeDataList.splice(index, 1);
  }
  res.send({
          "status" : 200,
          "message" : "completed"
  })

})

app.delete(baseURL, (req, res) => {
  console.log("Server :: DELETE : Delete All Log Request")

  employeeDataList = []
   res.send({
            "status" : 200,
            "message" : "completed"

  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
