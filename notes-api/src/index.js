const express = require("express");
const noteRouter = require("./routers/note");
require("./db/mongoose");

const app = express();

app.all("/*", (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Method', "GET, PUT, POST, DELETE, OPTIONS, PATCH");
  res.header('Access-Control-Allow-Headers', "Content-Type, Authorization, Content-Length, X-Requested-Width");
  next();
})

app.use(express.json());
app.use(noteRouter);

app.listen(3000, () => {
  console.log("app is running on port 3000");
})
