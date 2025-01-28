const mat = require('./views/operacion');
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin,output:process.stdout});

var a, b = 0;
var answer = '';
// menu en consola
console.log('>>>>>>>>BIENVENIDO A OPERACIONES MATEMATICAS BASICAS<<<<<<<<<');
console.log('elija la operacion a realizar:');
console.log('[s]uma');
console.log('[r]esta');
console.log('[m]ultiplicacion');
console.log('[d]ivision');

rl.question('Que operacion deseas realizar, teclea la letra dentro [x]:', (answer) => {
    /*switch(answer) {
        case 's': resp = "suma";
        break;
        case 'r': resp = "resta";
        break;
        case 'm': resp = "multiplicacion";
        break;
        case 'd': resp = "division";
        break;
        default: resp = `Lo sentimos, no hay operacion a evaluar con [${answer}]  :(`;
    }*/
    console.log(`gracias por tu eleccion, vamos evaluar:  ${answer}`);
    rl.close();
});

console.log('----------------------1');
/*
rl.question('Ingresa el primer valor: ', (valor1) => {
        console.log(`Tu primer valor es:  ${valor1}`);
        a = parseInt(valor1);
        rl.close();
    });
    rl.question('Ingresa el segundo valor: ', (valor2) => {
        console.log(`Tu primer valor es:  ${valor2}`);
        b = parseInt(valor2);
    });



rl.close();*/
console.log('Respuesta: ');

console.log("tu dato leido es:" + a);

/*switch(answer) {
        case 's': console.log('La suma de ' + a +' + ' + b + ' = ' + mat.sumar(a,b));
        break;
        case 'r': console.log('La suma de ' + a +' - ' + b + ' = ' + mat.restar(a,b));
        break;
        case 'm': console.log('La suma de ' + a +' x ' + b + ' = ' + mat.multiplicar(a,b));
        break;
        case 'd': console.log('La suma de ' + a +' / ' + b + ' = ' + mat.dividir(a,b));
        break;
        default: resp = `opcion fallida!  :(`;
    }*/