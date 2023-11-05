// 1-Suma de Números Pares: Crea un programa que sume todos los números pares en un array.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0;
for(let i = 0; i<= numeros.length; i++){
    if (numeros[i] % 2 == 0){
        suma += numeros[i];
    }
        
};
console.log(suma);

//2-Factorial de un Número: Escribe una función que calcule el factorial de un número utilizando un bucle.

let num = 0;
function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  console.log(factorial(5));

//3-filtrar Números Primos: Crea una función que reciba un array de números y devuelva un
//nuevo array que contenga solo los números primos.



function esPrimo(nro) {

    if (nro > 1) {
       for (let i = 2; i <= Math.sqrt(nro); i++) {
            if (nro % i === 0) {
              return false;
            }
      }
    }
    return true;
};

let arrayNumeros = [2, 5, 7, 11, 6, 23];
let arrayPrimos = [];
for(let i = 0; i<= arrayNumeros.length; i++){
    if(esPrimo(arrayNumeros[i])){
      arrayPrimos.push(arrayNumeros[i]);
    }
};
console.log(arrayPrimos);

//4-Cálculo de Promedio: Crea una función que calcule el promedio de los elementos en un array.

function prom(arreglo){
  
    let promedio = 0;
    arreglo.forEach((element) => {
      promedio += element;
    });
    
    return(promedio/arreglo.length);
  };


const arrayNros = [2, 3, 7, 9, 12];

console.log("El promedio del arreglo es "+ prom(arrayNros));

//5-Eliminar Duplicados en un Array: Escribe una función que tome un array y elimine los
//elementos duplicados, devolviendo un nuevo array sin duplicados.

function eliminaDuplicados(arregloN){
    let nuevoArray = [];
    arregloN.forEach((element) => {
      if(!nuevoArray.includes(element)){
        nuevoArray.push(element);
      }
    });
    return(nuevoArray);
};

let arregloValores = ["mesa", "silla", "heladera", "mesa", "cocina", "silla"];
console.log(eliminaDuplicados(arregloValores));

// 6-De una sección existente en tu página, crea un subtitulo atractivo que llame la atención
// del usuario a querer conocer más, así mismo el usuario puede clickear un botón existente y
// que se muestre el texto de dicha sección.

const texto = document.getElementById("mostrarTexto");

function mostrar(){
    texto.className = "visible";
    
}

function ocultar(){
  texto.className = "oculto";
 
}
