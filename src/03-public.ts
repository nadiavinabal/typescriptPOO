export class MyDate {
   public year: number;
   public month: number;
   readonly day: number
 
    constructor(year: number, month:number, day:number){
       this.year = year;
       this.month = month;
       this.day = day;
    } 

    public printFormat ():string {
       return `${this.day}/${this.month}/${this.year}`;       
    }

    public add(amount:number, type:'days'|'months'|'years'){
       if(type == 'days'){
          //this.day += amount; // readonly no me deja que lo modifique internamente
       }

       if(type == 'months'){
        this.month +=amount;
       }

       if(type == 'years'){
        this.year += amount;
       }
    }
}

//creamos una instancia de la clase
const myDate = new MyDate(1993,1,23);
console.log(myDate.printFormat())

console.log(myDate.day);
//myDate.day = 12; -> error no se puede modificar ahora es solo lectura


/*
  Acceso publico me permite acceder o modificar a cualquier metodo o propiedad. Esto puede ser 
peligroso y va en contra del encapsulamiento. Las propiedades deberian ser de solo lectura
'readonly' -> tiene la desventaja que no permite modificar nisiquiera dentro de la clase.
*/ 