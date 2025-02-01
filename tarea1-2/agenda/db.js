const mysql=require('mysql2');

const conection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bd_agenda'
});

//conexion de la base de datos

conection.connect((error)=>{
    if(error){
        console.log('Error en al conexion de la base de datos');
        return;
    }
    console.log('conectado la base de datos!');
});

module.exports=conection;