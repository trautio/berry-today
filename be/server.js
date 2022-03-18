const express = require("express");
const app = express();

const { Bme680 } = require("bme680-sensor");
const bme680 = new Bme680(1, 0x76);

bme680.initialize().then(async () => {
  console.info("Sensor initialized");
  setInterval(async () => {
    console.info(await bme680.getSensorData());
  }, 3000);
});

app.get("/", (req, res) => {
  res.send("Hello from App Engine!");
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
