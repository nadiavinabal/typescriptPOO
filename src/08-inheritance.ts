export class Animal {
    constructor(
      public name:string
    ){}

    move(){
      console.log('Moving along!')
    }

    greeting(){
      return `Hello, I'm ${this.name}`;
    }
 }

 
//hacemos la instancia de clase Animal
const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

//Creamos una clase Perro. Como Perro es un Animal para no repetir el codigo hacemos que perro extienda de animal
export class Dog extends Animal{
  
  //extendemos propiedades
  constructor(
    //public name: string -> si le pongo public queda como un atributo propio de la clase. Dos name uno de animal y otro de perro
    name:string, //sin public solo lo toma del padre
    public owner: string,
  ){
    super(name);
  }
  //metodo especializado
  woof(time:number): void {
    for(let index=0; index < time; index++){
       console.log('woof')
     }
  }
}

const cheis = new Dog('cheis', 'nico'); //propiedad de animal
cheis.move(); //hereda metodo de animal
console.log(cheis.greeting());
cheis.woof(5); //metodo especial de Perro
console.log(cheis.owner);

