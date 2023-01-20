export class MyDate {
    year: number;
    month: number;
    day: number
 
    constructor(year: number, month:number, day:number){
       this.year = year;
       this.month = month;
       this.day = day;
    } 

    printFormat ():string {
       return `${this.day}/${this.month}/${this.year}`;       
    }

    add(amount:number, type:'days'|'months'|'years'){
       if(type == 'days'){
          this.day += amount;
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

myDate.add(5,'days')
console.log(myDate.printFormat())

myDate.add(1,'months')
console.log(myDate.printFormat())

//se puede acceder a las propiedades y a los metodos de forma directa
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.day);


