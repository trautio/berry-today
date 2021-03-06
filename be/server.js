const express = require("express");
const cors = require("cors");
var fs = require("fs");
const app = express();
app.use(cors({ credentials: true, origin: true }));

const { Bme680 } = require("bme680-sensor");
const bme680 = new Bme680(1, 0x76);

bme680.initialize().then(async () => {
  console.info("Sensor initialized");
});

app.get("/", async (req, res) => {
  res.json(await bme680.getSensorData());
});

app.get("/plants", async (req, res) => {
  const filepath = "";
  const files = fs.readdirSync(filepath);
  console.log(files);
  // add logic;
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
