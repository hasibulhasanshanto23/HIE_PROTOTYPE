const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ message: "Hello  World from hie-service" });
});

app.listen(PORT, () => {
  console.log(`hie-service running on http://localhost:${PORT}`);
});
