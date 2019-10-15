const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/static') );
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/static/index.html');
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
