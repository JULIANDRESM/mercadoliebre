const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const port = 3000;


app.listen(port,()=> console.log("Servidor corriendo en el puerto "+ port));

// app.get('/', function(req, res) {
//     res.send('Hola Mundo')
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});


app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});