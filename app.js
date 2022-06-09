const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send("Action runner updated")
})


app.get('/api/v1/user', (req, res) => {
  res.json({
    success: true,
    message: "User fetched",
    company: {
      name: "Hello company"
    }
  })
})

const port = 8080
app.listen(port, () => console.log(`App listening port ${port}`))