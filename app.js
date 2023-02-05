const express = require('express');
const app = express();
//const path = require('path');
const rutas = require('./routes/mainRouter.js');

app.use(express.static('public'));
app.set('view engine','ejs');
// const port = 3000;
const port = process.env.PORT || 3000;

app.listen(port,()=> console.log("Servidor corriendo en el puerto "+ port));

// app.get('/', function(req, res) {
//     res.send('Hola Mundo')
// });


// CONFIGURACIÓN DE RUTAS DIRECTAMENTE EN EL ARCHIVO ENTRI POINT (NO RECOMENDADO)
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/home.html'));
// });

// app.get('/productDetail', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/productDetail.html'));
// });

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/login.html'));
// });

// app.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/register.html'));
// });

// CONFIGURACIÓN DE RUTAS CON ARCHIVO DE RUTAS INDEPENDIENTE
app.use('/', rutas);