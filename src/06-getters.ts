// Forma controlada de acceder a los atributos o variables que se protegen de manera privada

export class MyDate {
    constructor(
     public year: number = 1993,
     public month:number = 7,
     //private day:number = 9 -> el metodo pasa a llamarse day y la propiedad _day
     private _day:number,
    ){}
 
    printFormat ():string {
     return `${this.day}/${this.month}/${this.year}`;       
   }

   get day (){ 
    return this._day;
   }

   //podemos tener una metodo que parezca propiedad
   get isLeapYear() {
     if (this.year % 400 === 0) return true;
     if (this.year % 100 === 0) return false;
     return this.year % 4=== 0;
   }
 } 

//de manera externa se ve como una propiedad no como un metodo.

const date1 = new MyDate(2000,3,1)
console.log('2000',date1.isLeapYear)
const date2 = new MyDate(2001,3,1)
console.log('2000',date2.isLeapYear)
const date3 = new MyDate(2004,3,1)
console.log('2000',date3.isLeapYear)

/**
  - cualquier get que se defina sea para una variable o para extender una propiedad mas con metodo
  todos los getter por definicion deben devolver algo.
  - sirve para ejecutar como un metodo pero desde afuera se consume como una propiedad
 */