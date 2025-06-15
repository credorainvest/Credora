const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Credora Admin Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
