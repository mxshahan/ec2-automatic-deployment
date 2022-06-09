const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send("Hello from express server")
})

app.listen(80, () => console.log("App listening port 80"))