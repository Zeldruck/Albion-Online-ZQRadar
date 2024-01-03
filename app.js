
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const PhotonParser = require('./scripts/classes/PhotonPacketParser');
var Cap = require('cap').Cap;
var decoders = require('cap').decoders;
const WebSocket = require('ws');
const ip = require('ip');

const fs = require("fs");





const app = express();


BigInt.prototype.toJSON = function() { return this.toString() }

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  const viewName = 'main/home'; 
  res.render('layout', { mainContent: viewName});
});

app.get('/home', (req, res) => {
  const viewName = 'main/home'; 
  res.render('./layout', { mainContent: viewName});
});

app.get('/raw', (req, res) => {
  const viewName = 'main/raw'; 
  res.render('layout', { mainContent: viewName });
});

app.get('/chests', (req, res) => {
  const viewName = 'main/chests'; 
  res.render('layout', { mainContent: viewName });
});

app.get('/map', (req, res) => {
  const viewName = 'main/map';
  const viewRequireName = 'main/require-map'

  fs.access("./images/Maps", function(error) {
    if (error)
    {
      res.render('layout', { mainContent: viewRequireName });
    }
    else
    {
      res.render('layout', { mainContent: viewName });
    }
  });
});

app.get('/ignorelist', (req, res) => {
  const viewName = 'main/ignorelist'; 
  res.render('layout', { mainContent: viewName });
});

app.get('/settings', (req, res) => {
  const viewName = 'main/settings'; 
  res.render('layout', { mainContent: viewName });
});




app.get('/drawing', (req, res) => {

  res.render('main/drawing');
});

app.get('/logout', (req, res) => {

  req.session.destroy();
  res.redirect('/');
});



app.use('/scripts', express.static(__dirname + '/scripts'))
app.use('/scripts/Handlers', express.static(__dirname + '/scripts/Handlers'))
app.use('/scripts/Drawings', express.static(__dirname + '/scripts/Drawings'))
app.use('/scripts/Utils', express.static(__dirname + '/scripts/Utils'));;
app.use('/images/Resources', express.static(__dirname + '/images/Resources'));
app.use('/images/Maps', express.static(__dirname + '/images/Maps'));
app.use('/images/Items', express.static(__dirname + '/images/Items'));
app.use('/config', express.static(__dirname + '/config'));



const port = 5001;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



const getActiveIP = () => {
  const interfaces = ip.address();
  return interfaces;
};


var c = new Cap();
var device = Cap.findDevice(getActiveIP());
const filter = 'udp and (dst port 5056 or src port 5056)';
var bufSize =  4096;
var buffer = Buffer.alloc(4096);
const manager = new PhotonParser();
var linkType = c.open(device, filter, bufSize, buffer);

c.setMinBytes && c.setMinBytes(0);

const server = new WebSocket.Server({ port: 5002, host: 'localhost'});
server.on('connection', () => {
  console.log("openned");

  c.on('packet', function(nbytes, trunc) {

    let  ret = decoders.Ethernet(buffer);
    ret = decoders.IPV4(buffer, ret.offset);
    ret = decoders.UDP(buffer, ret.offset);

    let payload = buffer.slice(ret.offset, nbytes);

    // Parse the UDP payload
    try
    {
        manager.handle(payload);
    }
    catch {}

  });


  manager.on('event', (dictonary) =>
  {    
    const dictionaryDataJSON = JSON.stringify(dictonary);
    server.clients.forEach(function(client) {
      client.send(JSON.stringify({ code : "event", dictionary: dictionaryDataJSON }))
    });
  });

  
  manager.on('request', (dictonary) =>
  {
    const dictionaryDataJSON = JSON.stringify(dictonary);
    server.clients.forEach(function(client) {
      client.send(JSON.stringify({ code : "request", dictionary: dictionaryDataJSON }))
   });
  });

  manager.on('response', (dictonary) =>
  {
    const dictionaryDataJSON = JSON.stringify(dictonary);
    server.clients.forEach(function(client) {
      client.send(JSON.stringify({ code : "response", dictionary: dictionaryDataJSON }))
   });
  });
});





