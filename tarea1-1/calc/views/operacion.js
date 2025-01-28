function sumar(a,b){return a+b;}
function restar(a,b){return a-b;}
function multiplicar(a,b){return a*b;}
function dividir(a,b){
    if (b === 0) {
        mostrarerrordiv();}
        else{
            return a/b;}
        }

function mostrarerrordiv() {
    console.log('no se puede dividir por cero');
}

exports.sumar=sumar;
exports.restar=restar;
exports.multiplicar=multiplicar;
exports.dividir=dividir;
