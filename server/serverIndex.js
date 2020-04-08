const express    = require("express");
const app        = express();
const http       = require('http').createServer(app);
const PORT       = 8080;

const bodyParser = require("body-parser");

http.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});