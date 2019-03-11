// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************
// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************
//Занятие 1
//1.1 Создать функцию которая принимает число и считает факториал этого числа. 
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
// console.log(factorial(3));
/*
1.2
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
 */
function sumArgs(...arguments) {
    if (arguments.length < 1) {
        return 0;
    }
    let sum = arguments.reduce((a, b) => a * b);
    return sum;
}
//   console.log(sumArgs(12,12,12)) 
/*
1.3
Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
*/
function reverseFunc(text) {
    return text.split("").reverse().join("");
}
//Занятие 2 
/*
2.1
Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине)
Задание 1-3
*/
class Car {
    constructor(mileage, fuel) {
        this._mileage = mileage;
        this._fuel = fuel;
    }
}
class initCar extends Car {
    constructor(_mileage, _fuel) {
        super(_mileage, _fuel);
    }
    drive(km) {
        if (km >= this._fuel) {
            let diffKm = km - this._fuel;
            console.log(`Вы хотите проехать больше чем в баке на ${diffKm} километров`);
        }
        this._mileage += km;
        this._fuel -= km;
        if (this._fuel <= 0) {
            console.log('Нужно заправиться');
        }
    }
    refuel(gas) {
        if (gas <= 0) {
            console.log('Укажите валидное количество топлива');
        }
        if (gas > 0) {
            this._fuel += gas;
            console.log(`количество газа в баке ${this._fuel}`);
        }
    }
    get fuel() {
        return this._fuel;
    }
    get mileage() {
        return this._mileage;
    }
}
// let obj = new initCar(500, 550);
