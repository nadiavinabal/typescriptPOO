// setter se utiliza para modificar alguna propiedad. Define reglas para que se pueda moficar.

export class MyDate {

       constructor(
        public year: number = 1993,
        private _month: number = 7,
        private _day: number = 9
      ) {}

       get month() {
        return this._month;
      }

      //si solo modifica el valor sin reglas. Variable deberia ser publica
      // set si o si le tengo que pasar un parametro -> 'a set accessor must have exactly one parameter'
      // es una funcion que no retorna nada -> void
      set month(newValue: number) {
        if (newValue >= 1 && newValue <= 12) {
          this._month = newValue;
        } else {
          throw new Error('month out of range');
        }
      }
}

const myDate = new MyDate(1993, 7,3);
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78; // error
console.log('esto no debe aparecer', myDate.month);