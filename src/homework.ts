
// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************

//Занятие 1
//1.1 Создать функцию которая принимает число и считает факториал этого числа. 

function factorial(n : number) :number {
    return (n != 1) ? n * factorial(n - 1) : 1;
  } 

// console.log(factorial(3));

/* 
1.2 
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 */

function sumArgs(...arguments: number[]): number {
    if (arguments.length < 1) {
        return 0;
    }
    let sum : number = arguments.reduce((a, b)=> a * b);   
    return sum;
  }

//   console.log(sumArgs(12,12,12)) 


/* 
1.3
Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
*/

function reverseFunc(text: string): string{
    return text.split("").reverse().join("");
}

// console.log(reverseFunc('test'));

/* 
1.4 
Создать интерфейс админа
*/

interface AdminInterface {
    name: string;
    email: string;
    password: string;
    type?: string;
}

//Занятие 2 
/* 
2.1
Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине)
Задание 1-3
*/

abstract class Car{
    protected _mileage : number;
    protected _fuel : number;

    constructor(mileage: number, fuel: number){
        this._mileage = mileage;
        this._fuel = fuel;
    }
    public abstract drive(km: number): void;
    public abstract refuel(gas: number): void;
}

class initCar extends Car{
    constructor(_mileage: number, _fuel: number){
        super(_mileage, _fuel)
    }
    public drive(km : number):void{
        if (km <=0 ) throw new Error('Не корректные данные');
        if(km > this._fuel){
            let diffKm: number = km - this._fuel;
            this._fuel-= (km - diffKm);
            this._mileage+= (km - diffKm);
            console.log(`Максимальное количество километров по данному запросу вы проехали  - ${km - diffKm} км.Нужно заправиться.`);
        }
        if(km <=this._fuel) {
          this._mileage+= km;
          this._fuel-=km;
        } 
    }

    public refuel(gas: number): void{
        if (gas <= 0){
            throw new Error('Не корректные данные');
        } 
        if (gas > 0 ){
            this._fuel+=gas;
            console.log(`количество газа в баке ${this._fuel}`)
        }                   

    } 
    public get fuel(): number{
        return this._fuel;
    }   
    public get mileage(): number{
        return this._mileage;
    }   
}

// let obj = new initCar(500, 500);


