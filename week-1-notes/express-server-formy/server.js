const express = require('express')
const path = require('path');

const server = express()
server.use(express.static('public'))
server.use(express.urlencoded())

server.get('/profiles', (req, res) => {
    let name = req.query.name || 'kelly'
    res.send('Hello ' + name);
})

server.get('/profiles/:id', (req, res) => {
    let id = req.params.id || 1

    if(id == 1){
        res.sendFile(path.join(__dirname + '/public/silvia.html'));;
    } else if (id == 2){
        res.sendFile(path.join(__dirname + '/public/sampson.html'));
    } else {
        res.send('weve lost you')
    }
})

server.post('/compliment', (req, res) => res.send(req.body.name));

module.exports = server

