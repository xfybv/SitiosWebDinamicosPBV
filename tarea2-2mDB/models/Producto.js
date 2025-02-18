const mongoose = require( 'mongoose');
const userSchema = new mongoose.Schema({
    id: {type: tinyint, required: any},
    nombre: {type: varchar(50), required: true},
    precio: {type: decimal(9,2), required: true},
    imagen: {type: varchar(30), required: true},
    detalle: {type: varchar(255), required: true},
});
module.exports = mongoose.model('Producto', userSchema);
