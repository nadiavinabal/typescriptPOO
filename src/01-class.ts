//instancia de la clase Date
const date = new Date(); //por defecto se crea con la fecha de hoy

//accedemos a metodos de la clase Date.
date.getHours();
date.getTime();

const date2 = new Date(2023,0,20) //creamos intancia de la clase por medio de parametros
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

//definimos nuestra propia clase Date con propiedades año, mes, dia.

class MyDate {
   year: number;
   month: number;
   day: number

   constructor(year: number, month:number, day:number){
      this.year = year;
      this.month = month;
      this.day = day;
   } 
}

//cuando definimos una clase nos marca como error si no inicializamos las propiedades. Es una buena practica inicializar las varianles. Se puede hacer
//con el constructor.

//instancia de la clase MyDate
const myDate = new MyDate(2023,1,20)
console.log(myDate)

/*
    Clases son soportadas desde EM6
    Si traspilamos EM5 las convierte en funciones
*/