const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send("Hello from express server")
})


app.get('/api/v1/user', (req, res) => {
  res.json({
    success: true,
    message: "User fetched succesfully",
    user: {
      fullname: "Md Misbauddin Chowdhur",
      company: "Sylzone Technology",
      phone: "12345678"
    }
  })
})


app.listen(80, () => console.log("App listening port 80"))