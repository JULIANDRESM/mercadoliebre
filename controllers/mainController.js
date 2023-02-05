const path = require('path');


articles = [
    {
        id: 1,
        descripcion: 'Cafetera Moulinex',
        precio: '$6.770',
        descuento: '40% OFF',
        imagen: '/images/img-cafetera-moulinex.jpg'
    },
    {
        id: 2,
        descripcion: 'MacBook Pro 2019',
        precio: '$230.000',
        descuento: '20% off',
        imagen: '/images/img-macbook-pro-2019.jpg'
    },
    {
        id: 3,
        descripcion: 'Samsung Galaxy S10',
        precio: '$70.500',
        descuento: '10% off',
        imagen: '/images/img-samsung-galaxy-s10.jpg'
    },
    {
        id: 4,
        descripcion: 'SmartTv Samsung 43',
        precio: '$23.200',
        descuento: '5% off',
        imagen: '/images/img-tv-samsung-smart.jpg'
    }
]

let login = true


const controlador = {
    // index: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../views/home.html'));
    // },
    index: (req, res) => {
        res.render('home', {articulos: articles, login});
    },
    // productDetail: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    // },
    productDetail: (req, res) => {
        let id = req.params.id;

        let articulo = articles.find(article => article.id == id );

        res.render('productDetail', {articulo});
    },
    // login: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../views/login.html'));
    // },
    login: (req, res) => {
        res.render('login');
    },
    // register: (req, res) => {
    //     res.sendFile(path.join(__dirname, '../views/register.html'));
    // },
    register: (req, res) => {
        res.render('register');
    },
}

module.exports = controlador;