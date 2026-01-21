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

    setTimeout(() => {

         res.send({
                "status" : 200,
                "message" : "completed"
            })
        
    }, 7000);
  

  console.log(req.body)
  employeeDataList.push(req.body)
})

app.get(baseURL+"", (req, res) => {
  res.send({
    "status" : 200,
    "message" : "completed",
    "result" : employeeDataList
  })
  
  employeeDataList.push(res.get)
})

app.delete(baseURL+":id", (req, res) => {
  let index = employeeDataList.findIndex(element => element.employeeId === req.params.id);
  if (index !== -1) {
    employeeDataList.splice(index, 1);
}
   res.send({
            "status" : 200,
            "message" : "completed"
    })
  console.log(req.params.id)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

