export class Animal {
    constructor(
      protected name:string
    ){}

    move(){
      console.log('Moving along!')
    }

    greeting(){
      return `Hello, I'm ${this.name}`;
    }
 }


export class Dog extends Animal{
  constructor(
    name:string, 
    public owner: string,
  ){
    super(name);
  }
  woof(time:number): void {
    for(let index=0; index < time; index++){
       console.log(`woof ${this.name}`)
     }
     this.doSomething(); //puedo usarlo de manera interna 
  }

  //uso protected en metodos
  protected doSomething() {
    console.log('dooo')
  } 

  //especializar un metodo que ya existe en la clase padre
  move() {
    console.log('movving as a dog') // primero se ejecuta este
    super.move(); // despues se ejecuta el metodo del padre
  }
}

const cheis = new Dog('cheis', 'nico'); 
// Si quiero modificar el nombre del perro es totalmente valido
//cheis.name = 'Otro nombre';
cheis.woof(1);

// se pudo acceder y modificar el nombre. Que no es lo mas conveniente. 
//Usamos private no deja modificarlo ni externo ni por la clase que hereda -> USO Proteced
// funciona como private pero en herencia. 
cheis.move();

