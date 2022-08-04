const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
let geoip = require('geoip-country');
let os = require("os");

app.get('/', (req, res) => {
  let networkInterfaces = os.networkInterfaces();
  let geo = geoip.lookup(networkInterfaces['Wi-Fi'][0].address);
  if (geo.country === "UY") {
    res.send(`Hey, this website is not available in your country: ${geo.country}`);
  } else {
    res.send("welcome to the website")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})