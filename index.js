//Christian Wu

const cors = require("cors");
const express = require("express");
const http = require("http");
// const https = require("https");
const fs = require("fs");

const app = express();
const port = process.env.PORT;
const association = fs.readFileSync('.well-known/apple-app-site-association')
const assetlinks = fs.readFileSync('.well-known/assetlinks.json');

const options = {
    key:fs.readFileSync("cert/localhost-key.pem"),
    cert:fs.readFileSync("cert/localhost.pem"),
};

app.use(cors());
app.use(express.json());

http
    .createServer(options, app)
    .listen(port, () => {
        console.log(`Brightspace-OAuth-Server-NodeJS listening on port ${port}`)
    })

// Host files for App link and Universal Link
app.get('/.well-known/assetlinks.json', function(req, res, next){
    res.set('Content-Type', 'application/json');
    res.status(200).send(assetlinks);
})

app.get('/.well-known/apple-app-site-association', function(req, res, next){
    res.status(200).send(association);
})


