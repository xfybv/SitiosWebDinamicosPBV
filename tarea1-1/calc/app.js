const express = require('express');
//const { set } = require('express/lib/application');
//const path = require('path');
const mat = require('./views/modulo-aritmetico');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    //res.send('...</head><body><h1>'+'Hola Mundo</h1></body>...');
    res.render('index');
});

app.post('/calcular',(req, res) =>{
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
 const op = parseInt(req.body.op);
 //console.log(req.body.op);
 switch(op) {
  case 1: resp = mat.sumar(num1, num2);;
  break;
  case 2: resp = mat.restar(num1, num2);;
  break;
  case 3: resp = mat.multiplicar(num1, num2);
  break;
  case 4: resp = mat.dividir(num1, num2);
  break;
  //default: resp = `Lo sentimos, no hay operacion a evaluar con [${answer}]  :(`;
} 

  res.render('resultado', {resp});
});

app.listen(port, () =>{
    console.log(`Servidor web iniciado en puerto${port}`);
});

/* app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});ath.join(__dirname, 'aritmeticas');
 */

