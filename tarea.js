
//Crea una variable numero y asígnale un valor de tipo number.
var a = 1;

//Crea una variable texto y asígnale un valor de tipo string.
let miVariable = "Taylor Swift"; 
//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let variable= true;
//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
let falso = false; 
//Crea una variable nulo y asígnale un valor de tipo null.
let vacio = null;
//Crea una variable indefinido y asígnale un valor de tipo undefined.
let indefinido = undefined
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.

//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(a,typeof a)
//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log( miVariable, typeof miVariable)
//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
console.log(variable, typeof variable)
//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
console.log(falso, typeof falso)
//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(vacio, typeof vacio)
//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(indefinido, typeof indefinido)
//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.




/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
// let numero = Number(prompt("Ingrese una letra"))
// if (numero> 10){
// console.log("Es mayor")
// } else if (numero< 10) {
//     console.log("Es menor")
// } else if (numero===10) {
//     console.log("El numero es igual")
// }
// console.log(numero, typeof numero)

//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
let num = 10;
    // if(num%2==0){
        
    //     console.log("El número "+num+" es par");
    
    // }else{
        
    //     console.log("El número "+num+" es impar");
        
    // }
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
let caracter = "d";
console.log(caracter)
caracter= caracter.toLowerCase()
console.log(caracter)
if(caracter === "a" || caracter === "e" || caracter=== "i" || caracter === "o"|| caracter === "u") {
    console.log("El caracter es una vocal", caracter) 
} else {
    console.log("El carater es una consonante", caracter) 
}



//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.

//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.

//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.




//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumar(numero1,numero2){
    return numero1 + numero2 
}

console.log('La suma es'+sumar(5,8))

//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function isPart(numero){
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    } 
}
console.log(isPart(9)) 
console.log(isPart(8))

//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.

//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.





//Vectores
let dias= ["domingo",
            "lunes",
            "martes",
            "miercoles",
            "jueves",
            "viernes",
            "sabado"]

let input = 2;

console.log(dias[input - 1])


//Escribe una función que tome un array de números como argumento y devuelva el número más grande.

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.

//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.

//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.




//Bucles
let miArray = ["a", "b", "c"]
for (let i = 0; i < miArray.length; i++) {
    console.log(i,miArray[i])
}


//Escribe un bucle for que imprima en la consola los números del 1 al 10.

//Escribe un bucle while que imprima en la consola los números del 1 al 5.

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.
 




//DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.