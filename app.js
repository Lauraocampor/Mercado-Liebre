const express = require('express');
const path = require('path');

const app = express();

//const publicPath = path.join(__dirname, './public');

app.listen(3010, () => console.log('Servidor corriendo en el puerto 3010 | http://localhost:3010'));

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