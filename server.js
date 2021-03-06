const express = require("express");
const app = express();

let bodyParser = require("body-parser");

let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static("public"));
app.use(express.static("assets"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.post("/nfc", (req, res) => {
  io.emit("message", { nfc: true });
  res.sendStatus(200);
});

const listener = http.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
