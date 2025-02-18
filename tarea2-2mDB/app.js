const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const cors = require('cors');
//const producto = require('./models/Producto');
const Producto = require('./models/Producto');
const app = express();

//configuracion
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

//conexion a la base de datos
mongoose.connect('mongodb://Localhost:27017/productos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
});

//rutas
app.get('/', async (req, res) => {
    const products = await Producto.find();
    res.render('index', { products });
});

app.get('/productos/nuevo', (req, res) => {
    res.render('create');
});

app.post('/productos', async (req, res) => {
    const { nombre, precio, imagen, detalle } = req.body;
    //const producto = new Producto({ nombre, precio, imagen, detalle });
    await Producto.create({ nombre, precio, imagen, detalle});
    res.redirect('/');
});

app.get('/productos/:id', async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.render('show', { producto});
});

app.get('/productos/:id/editar', async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.render('edit', { producto});
});

app.put('/productos/:id', async (req, res) => {
    const { nombre, precio, imagen, detalle } = req.body;
    await Producto.findByIdAndUpdate(req.params.id, { nombre, precio, imagen, detalle });
    res.redirect('/');
});

app.delete('/productos/:id', async (req, res) => {
    await Producto.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Servidor iniciado');
});