const express = require('express')
const app = express()
const port = process.env.PORT || 3000; //geo ? geo.country : "unknown";
let geoip = require('geoip-country');
let os = require("os");

app.get('/', (req, res) => {
/*   let networkInterfaces = os.networkInterfaces();
  let geo = geoip.lookup(networkInterfaces['Wi-Fi'][0].address);
  if (geo.country === "UY") {
    res.send(`Hey, this website is not available in your country: ${geo.country}`);
  } else if(geo.country !== "UY"){
    res.send("welcome to the website")
  } else {
    res.send("Unknown Country")
  } */
  res.send("testing this app shit")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})