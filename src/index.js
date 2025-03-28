const express = require("express");

const server = express();

const port = 3000;

server.get("/", (req, res) => {
  res.send("Hello World!");
});
server.get("/json", (req, res) => {
  const rispostaJson = { "nome": "Pippo" };

  res.send(rispostaJson);
});

server.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
