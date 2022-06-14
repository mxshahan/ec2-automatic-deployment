const express = require('express');
const path = require('path');

const app = express();

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/test', (req, res) => {
  res.send('Action runner updated');
});

app.get('/api/v1/user', (req, res) => {
  res.json({
    success: true,
    message: 'User fetched',
    user: {
      fullname: 'Hello company',
      email: "user@gmail.com",
      phone: "+880293938383"
    },
  });
});



const port = 8080;
app.listen(port, () => console.log(`App listening port ${port}`));
