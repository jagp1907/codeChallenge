//PRIMER DESAFIO--------------------------------------------------------------------------------------------------------------------------------
//Se declara la variable x la cual se utilizara como parametro para evaluar si es un numero "Palindromo" usando la funcion esPalindromo
//Declaracion de variable x para definir el numero
let x=10;
//Declaracion de la funcion que permite evaluar si es o no un numero palindromo
function esPalindromo(x){
    //Se inicializa la variable voltear en 0 para que no se sobreescriba el resultado al volver a usar la funcion esPalindromo
    let voltear=0;
    //Se evalua si el numero en x es negativo, en caso de que SI sea NEGATIVO, entonces la funcion retornara un NULL  
    if(Math.sign(x)==-1){
        return null;
    }
    //en caso de que x sea un valor POSITIVO, entonces entrara en el ciclo while el cual repetira un algoritmo para invertir el numero y lo retornara invertido
    else{
        while(x!=0){
            voltear= 10 * voltear + x %10;
            x=(Math.floor(x/10));
        }
        return voltear;
    }
}
//Impresion del resultado mediante operador ternario
console.log(esPalindromo(x)==null?'false':esPalindromo(x)===x?'true':'falsepalindrome.');
document.write('PRIMER DESAFIO: ');
document.write("<br>");
document.write("INPUT: ",x);
document.write("<br>");
document.write('RESULTADO= ',esPalindromo(x)==null?'false':esPalindromo(x)===x?'true':'falsepalindrome.');
document.write("<br>");
document.write("<br>");
//SEGUNDO DESAFIO--------------------------------------------------------------------------------------------------------------------------------
//Declaracion del arreglo numeros
let numeros=[1,3,5,6];
//Declaracion de variable para especificar el numero que se pretende buscar
let buscar=7;
//Declaracion de funcion que se encargara de buscar el indice en el que se encuentra el numero buscado
function buscarNumero(buscar){
    for(i=0;i<numeros.length;i++){
        if(buscar==numeros[i]){
            return i;
        }
    }
}
//Declaracion de funcion que se encargara de determinar si el numero buscado existe en el arreglo
function determinarExistencia(buscar){
    if(numeros.includes(buscar)==true){
        buscarNumero(buscar);
    }
    else{
        //Si NO existe agregara el numero al arreglo
        numeros.push(buscar);
        //Ordenara nuevamente el arreglo 
        numeros.sort(function(a,b){return a - b});
        //Se llama a la funcion que determina el indice que tiene el numero buscado en el arreglo
        buscarNumero(buscar);
    }
}
//Se llama a la funcion que decide si existe o no el numero en el arreglo
determinarExistencia(buscar);
//Impresion del resultado
console.log(buscarNumero(buscar));
document.write('SEGUNDO DESAFIO: ');
document.write("<br>");
document.write("INPUT: ",buscar);
document.write("<br>");
document.write("ARREGLO: ",numeros);
document.write("<br>");
document.write('RESULTADO= ',buscarNumero(buscar));
document.write("<br>");
document.write("<br>");
//TERCER DESAFIO--------------------------------------------------------------------------------------------------------------------------------
//Declaracion de variable s para definir el texto que se evaluara posteriormente
let s='luffy sigue siendo joyboy';
//Declaracion de la funcion que devolvera la longitud de la ultima palabra que se introdujo en la variable s
function devolverLongitud(s){
    //En este caso split divide el texto a partir de cada espacio en el string
    let palabras=s.split(' ');
    //En este caso length devuelve el numero de palabras que hay en la variable s
    let numeroPalabras=palabras.length;
    //Se retorna la longitud que tiene la ultima palabra que existe en la variable s
    return (palabras[numeroPalabras-1]).length;
}
//Impresion del resultado
console.log(devolverLongitud(s));
document.write('TERCER DESAFIO: ');
document.write("<br>");
document.write("INPUT: ",s);
document.write("<br>");
document.write('RESULTADO= ',devolverLongitud(s));

