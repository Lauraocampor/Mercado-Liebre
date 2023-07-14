const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();

//Levantar nuestro servidor
const port = process.env.PORT || 3001;
app.listen(port, () =>console.log('Servidor corriendo en el puerto' + process.env.PORT + ' - http://localhost:3001'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});
app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.use(express.static('public'));