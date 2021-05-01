/*
console.log('webpack starterkit');
const PI = 3.141592;
console.log("Valor de pi ", PI);
//PI=12;
{

    const i = 2;
    console.log("el valors de i es ", i);

}

// contstante objeto
const car = {
    type: "fiat",
    model: '500',
    color: 'blanco'
};
car.color = 'rojo';
car.propietario = 'Alejandro';
console.log('constante objeto', car);

var x = 5;
var y = 6;

{
    var z = x + y;
    console.log('valor de z en un bloque ', z);

}
console.log('valor de z fuera del bloque ', z);

let a = 5;
let b = 6;
{
    let c = a + b;
    console.log('valor de c en el bloque ', c);
}
//console.log('valo de c fuera del bloque ',c);

function mifuncion(a, b, ...masParametros) {
    console.log('valr de a ', a);
    console.log('valr de b ', b);
    masParametros.forEach(v => {
        console.log('valr de mas parametross ', v);
    });


}

mifuncion(1, 2, 3, 4, 5);

//desestructuracion de arreglos.
{
    let desarreglos = [1, 2, 3];
    const [a, b, c] = desarreglos;
    console.log('valor de A ', a);
    console.log('valor de B ', b);
    console.log('valor de C ', c);

}

{
    let arreglo2 = [1, 2, 23,];
    const [a, b, c, d = 4] = arreglo2;
    console.log('valor de D ', d);
}

//desestructuracion de Arreglos
{
    let persona = {
        nombre: 'Ricardo',
        apellido: 'Jimenez',
        otroapellido: 'Ariaz'
    };
    console.log('yo soy', persona.nombre);
    const { nombre, domicilio = 'en una calle' } = persona;
    console.log('yo soy otro', nombre);
    console.log('mi domicilio es ', domicilio);
}

{
    let persona = {
        nombre: 'Ricardo',
        apellido: 'Jimenez',
        otroapellido: 'Ariaz',
        domicilio: {
            calle: '5 de mayo',
            numero: '17'
        }
    };
    const { domicilio: { calle } } = persona;
    console.log('esta es la calle:', calle);
    const { domicilio: domicilio } = persona;
    console.log('eeste es el domicilio ', domicilio);
}
//operador spread
{
    let antes = Math.max(1, 5, 2, 3, 4);
    console.log('el mayor es ', antes);

    let arreglo3 = [1, 2, 3, 4];
    let ahora = Math.max(...arreglo3);
    console.log('el mayor ahora es ,', ahora);

    let arrglo4 = [1, 5, -1, 18];
    let arrglo5 = [8, 3, 5, 4];
    let maximo = Math.max(7, ...arrglo4, ...arrglo5);

    console.log('el numero mayor es ', maximo);

    let arreglo6 = [3, 5, 1];
    let arreglo7 = [3, 9, 15];
    let merge = [...arreglo6, ...arreglo7];
    console.log('la union de los arreglos es ', merge);
}

{
    let comida = ['carne', 'pollo'];
    let mascomida = ['manzana', ...comida, 'papas'];
    console.log('El menu de hoy es ', mascomida);
}
{
    const gato = {
        nombre: 'gato',
        edad: 1,

    };
    console.log('gato', gato);
    const otrogato = {
        ...gato
    };
    otrogato.nombre = 'michi';
    console.log('otro gato', otrogato);
}

// Operador TypeOff
{
    let mifuncion = new Function(5 + 2);
    let nombre = 'Jovanie';
    let edad = 18;
    let hoy = new Date();

    console.log('funcion ', typeof mifuncion);
    console.log('nombre ', typeof nombre);
    console.log('las constante edad es un numero ', typeof edad === 'number' ? 'si' : 'no');
    console.log(typeof hoy === 'object' ? 'Si' : 'No');

    const persona = {
        nombre: 'Edwin',
        cel: 2411475845,

    };

    if (typeof persona.nombre === 'string') {
        console.log('el atributo nombre es un string');
    } else {
        console.log('el atributo nombre no es un tipo string');
    }
    if (typeof persona.cel === 'number') {
        console.log('el atributo es un numero');
    } else {
        console.log('el atributo cel no es un numero');
    }
}

//
{
    function main() {
        console.log('event loop');
        setTimeout(function timer() {
            console.log('hola mundo');
        }, 1000);
        console.log('otro mensaje');
    }
    main();
}

console.log('igualdad debil ', 1 == 1);
console.log('igualdad debil 2 ', 0 == false);
console.log('igualdad debil 3', 'hola' == 'hola');
console.log('igualdad debil 4', 1 == '1');
console.log('igualdad debil 5', 0 == !!null);


console.log('igualdad estricta ', '1' === 1);
console.log('igualdad estricta 2 ', 0 === false);

console.log('Desigualdad debil', 1 != 1);
console.log('Desigualdad debil 2', '1' != 1);

console.log('Desigualdad fuerte 2', '1' !== 1);

{
    let esSocio = true;
    if (esSocio) {
        console.log('Si es socio');
    } else {
        console.log('No es socio');
    }
    //operador ternario e interpolacion de estring
    console.log(`${(esSocio ? 'si' : 'No')}`, 'es socio1');
}

// scopes
var variableGlobal = 'variable global';
function functionScope() {
    console.log(variableGlobal);
    var scopeFuncion = 'algo';
    let bandera = true;
    if (bandera) {
        console.log(variableGlobal);
        console.log(scopeFuncion);
        let variableLocal = 'variable local dentro de if';
        console.log(variableLocal);
    } else {

    }
    //console.log(variableLocal);
}
functionScope();

// IIFE 
var resultado = (function () {
    var nombre = 'ricardo';
    return nombre;
})();

console.log('IIFE', resultado);

(function () {
    var nombre = 'Edwin';
    console.log('IIFE', nombre);
})();

(() => {
    console.log('IIFE funcion de flecha');
})();

//closures

const aa = 'hola';
function globar() {
    const bbb = '¿que ';
    function local() {
        const cc = 'tal ?';
        return aa + bbb + cc;
    } return local;


};
const closure = globar();
console.log('closure', closure());

const miContador = (function () {
    let _contador = 0;
    function incrementar() {
        _contador++;
    }
    function restar() {
        _contador--;
    }
    function valor() {
        return _contador;
    }
    return {
        incrementar,
        restar,
        valor
    };
})();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
console.log('valor ', miContador.valor());
miContador.restar();
console.log('valor ', miContador.valor());

//Arrow o funciones flecha
//var colores = ['rojo', 'verde', 'azul'];
//colores.forEach(function (colores) {
//  console.log('->', color);
//});


///colores.forEach((color) => {
// console.log('->', colores);
//});



//Default parametro

function mutltyply(a, b = 1) {
    return a * b;
};
console.log(mutltyply(5, 2));
console.log(mutltyply(5));

//constructor 
const sum = new Function('a', 'b', 'return a+b');
console.log(sum(2, 6));

//prototype

{
    function Home(nombre, direccion) {
        this._nombre = nombre;
        this._direccion = direccion;
    }
    const miCasa = new Home('ricardo', '5 de mallo');
    const miOtraCasa = new Home('Edwin', 'joaquin C');

    console.log('mi casa', miCasa);
    console.log('Mi otra casa', miOtraCasa);

    console.log(miCasa.__proto__ === miOtraCasa.__proto__);

    function Persona(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    Persona.prototype.interest = ['ver tv', 'jugar futbol'];
    const edwin = new Persona('edwin', 22);
    const breenda = new Persona('Dulce', 20);

    edwin.interest.push('algomas');

    console.log('persona 1', edwin);
    console.log('persona 2', breenda);
}

//array iteraciones
var array = [10, 20, 30, 40, 50];
let copiaArreglo = [];
array.forEach(v => {
    copiaArreglo.push(v);
});
console.log('copia arreglo', copiaArreglo);

// Filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

//Every 
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13, 42];

console.log(array1.every(isBelowThreshold));

var numberss = [2, 5];
var doubless = numberss.map(function (x) {
    return x * 2;
});
console.log('map = >', doubless);

//Reduce 
{
    const array3 = [2, 5, 45];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array3.reduce(reducer));
}
{
//EJERCICIO
const iva = 1.16;
let facturas = [
    {
        precio: 23,
        cantidad: 1

    }, {
        precio: 19,
        cantidad: 2
    }, {
        precio: 14,
        cantidad: 4
    }, {
        precio: 22,
        cantidad: 1
    }
];

var doubless = facturas.map(function (x,) {
    return((x.precio*x.cantidad)*1.16);
});
       console.log(doubless);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log('el total es ',doubless.reduce(reducer));
   
    


}
*/class Inmueble {
    constructor() {

    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    get direccion() {
        return this._direccion;
    }
}
class Casa extends Inmueble {
    constructor(numHabitaciones, tienePatio, tieneCoche) {
        super();
        this._numHabitaciones = numHabitaciones;
        this._tienePatio = tienePatio;
        this._tieneCoche = tieneCoche;

    }
    set color(x) {
        this._color = x;

    }
    get color() {
        return this._color;
    }
    esGrande() {
        return this.tienePatio && this.tieneCoche ? true : false;
    }
    static Saludo() {
        return 'Bienvenido a mi casa';
    }
}
console.log(Casa.Saludo());
let miCasa = new Casa(3, true, true);
miCasa.color = 'blanco';
miCasa.direccion = 'bDmayo';
console.log('Mi casa', miCasa);
console.log('mi casas es de color', miCasa.color);
console.log(`Mi casa es grande ? ${miCasa.esGrande() ? 'si' : 'No'}`);


//Ejercicio

import raza from './modulos.js';
import { iva, precio } from './constantes.js';

let miPerro = new raza('Grande', 'Rotttweiler',);
miPerro.color = 'cafee';
miPerro.complex = 'robusto';
console.log('datos de mi perro', miPerro);
console.log(miPerro.esAgresivo());
console.log(`Mi perro es agresivo ? ${miPerro.esAgresivo() ? 'si' : 'No'}`);

console.log("El precio es ", precio, 'el iva es ', iva);

{
    try {
        console.log('antes de propagar un error');
        throw new Error('!ocurrio un error¡');
    } catch (error) {
        console.error('Error', error);

    }

    try {
        console.log('en try 1');
        functionquenoexiste();
        console.log('en try 2');
    }
    catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Ocurrio un error de referencia');
        } else {
            console.error(error);
        }

    } finally {
        console.log('Esta accioon siempre se va a ejecutar');
    }

}
//CallBack
{
    function impirmemsj(mensaje) {
        console.log('EL mensaje es ', mensaje);
    }

    function ejemplocall(a, b, callback) {
        let suma = a + b;
        callback(`el resuladado de la suma es ${suma}`);

    }
    ejemplocall(1, 4, impirmemsj);
}
/*
//promesas
{
    let x = 11;
    const p = new Promise((resolve, reject) => {
        if (x == 10) {
            resolve('la veriable es igual a 10');
        }else{
            reject('la variable no es igual a 10');
        }
    });
    p.then(res => {
        console.log(res);
    }).catch(error => {
        console.error(error);
    });



}*/
/*
{
    let x = 10;
    console.log('1El proceso se ha iniciado ');
    setTimeout(function timer(){
        x = x * 2 + 2;
        console.log('el proceso ha terminaddo');
    }, 500);
    console.log('El resultado es :',x);
}*/
{

    let x = 10;
    console.log('promesa 1 El proceso se ha iniciado ');
    const promesa = new Promise((resolve, reject) => {
        setTimeout(function timer() {
            x = x * 2 + 2;
            console.log('promesa 2 el proceso ha terminaddo');
            resolve(x);
        }, 2000);
    });
    promesa.then(res => {
        console.log('promesa 3 El resultado es :', x);
    });
}

{
    let usuarios = [
        {
            id: 1,
            nnombre: 'Julian'
        }, {
            id: 2,
            nnombre: 'Juanga'
        }

    ];

    let telefonos = [
        {
            id: 1,
            telefono: 2411425241
        }, {
            id: 1,
            telefono: 2474583619
        }
    ]

    const obtenerUsuario = id => {
        return new Promise((resolve, reject) => {
            if (usuarios.find(v => id === v.id)) {
                console.log('el usuario existe');
                resolve(obtenerTelefono(id));
            } else {
                reject('El usuario no existe');
            }
        });
    };
    const obtenerTelefono = id => {
        return new Promise((resolve, reject) => {
            if (telefonos.find(v => id === v.id)) {
                console.log('El telefono si existe');
                resolve('exito');
            } else {
                reject('El telefono no existe');
            }
        });
    };
    obtenerUsuario(4).then(res => {
        return res;
    })
        .then(mensaje => {
            console.log(mensaje);
        }).catch(error => console.error(error));
}