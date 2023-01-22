/*
 El constructor es el metodo por el cual nosotros construimos la instancia y ademas 
 le mandamos los parametros por defecto con los que queremos inicializar la instancia
   
 export class MyDate {
    year:number;
    month: number;
    private day: number;
 
    constructor(year: number, month:number, day:number){
       this.year = year;
       this.month = month;
       this.day = day;
    }
 
  }*/

//Forma acortada
export class MyDate {
   constructor(
    public year: number = 1993,
    public month:number = 7,
    private day:number = 9
   ){}

   printFormat ():string {
    return `${this.day}/${this.month}/${this.year}`;       
 }
} 

const myDate1 = new MyDate() //toma los valores por defecto
console.log('() => ', myDate1.printFormat())
const myDate2 = new MyDate (2023)
console.log('(2023) => ', myDate2.printFormat())
const myDate3 = new MyDate(2022, 5)  
console.log('(2022, 5) => ', myDate3.printFormat())