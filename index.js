const cors = require("cors");
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const app = express();
const port = 3434;
const assetlinks = fs.readFileSync('.well-known/assetlinks.json');
const options = {
    key:fs.readFileSync("cert/localhost-key.pem"),
    cert:fs.readFileSync("cert/localhost.pem"),
};

app.use(cors());
app.use(express.json());

https
    .createServer(options, app)
    .listen(port, () => {
        console.log(`Brightspace-OAuth-Server-NodeJS listening on port ${port}`)
    })

app.get("/", (req, res) => {
    res.send("Welcome to the MyDTU server");
    });

app.get('/.well-known/assetlinks.json', function(req, res, next){
    res.set('Content-Type', 'application/json');
    res.status(200).send(assetlinks);
})

app.get('/redirecturi', async (req, res) => {
    const code = req.query.code;
    console.log("Code: " + code);
    console.log("Redirecting to application");
    // // res.redirect('https://google.dk');
    // res.rediret('https://10.0.2.2:3434)    
    // res.redirect('https://10.0.2.2:3434/redirecturi?code='+code);

})

