// En JS tenemos una utilidad Math que tiene propiedades estaticas
console.log('Math', Math.PI) //propiedades estaticos se pueden llamar sin crear una instancia -> math = new Math();
console.log('Math', Math.max(3,56,7,8,9)) // metodos estaticos

// Math.PI = 2334; -> marca error. no puedo modificar el valor de PI 

//creamos nuestra propia clase para ver el funcionamiento de propiedades y metodos estaticos.
class MyMath {
   static readonly PI = 3.14;

   //metodo statico
   static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max: item,0); // -> no funciona para numeros negativos
 }
}

// si no fuera estatico tendriamos que hacer myMath = new MyMath(); myMath.PI
console.log('MyMath', MyMath.PI)
//MyMath.PI = 2334; -> si me deja modificar. Tengo que agregar readonly a la variable 
const number = [4,5,6,888,6]
console.log('MyMath', MyMath.max(...number))
