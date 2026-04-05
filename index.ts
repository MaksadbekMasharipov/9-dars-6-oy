// class Animal {
//     name: string      // hayvon nomi
//     age: number       // yoshi

//     // object yaratilganda avtomatik ishlaydi
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }

//     // hayvon ovozi - har bir hayvon o'zicha to'ldiradi
//     speak(): string {
//         return this.name + " ovoz chiqarmoqda"
//     }
// }

// // Animal dan meros olish - uning hamma narsasi Student ga o'tadi
// class Dog extends Animal {
//     breed: string     // zoti (labrador, husky...)

//     constructor(name: string, age: number, breed: string) {
//         super(name, age)   // Animal ning constructor ini ishga tushiradi
//         this.breed = breed
//     }

//     // speak ni qayta yozish - it o'zicha vov deydi
//     speak(): string {
//         return this.name + " vov vov!"
//     }
// }

// // ishlatish
// const animal = new Animal("Mushuk", 3)
// console.log(animal.speak())   // "Mushuk ovoz chiqarmoqda"

// const dog = new Dog("Rex", 5, "Husky")
// console.log(dog.speak())      // "Rex vov vov!"
// console.log(dog.name)         // "Rex" - Animal dan meros
// console.log(dog.breed)        // "Husky" - Dog ning o'zi





// 1-MASALA
// class Car {
//     model: string
//     year: string
//     color: string


//     constructor(model: string, year: string, color: string) {
//         this.model = model
//         this.year = year
//         this.color = color
//     }


//     changeColor(newColor: string):void {
//         this.color = newColor
//     }

//     displayInfo():object {
//         const result = {
//             "model": this.model,
//             "year": this.year,
//             "color": this.color
//         }

//         return result
//     }
// }


// const car = new Car("BMW", "2026", "black")
// console.log(car.displayInfo());
// car.changeColor("pink")
// console.log(car.displayInfo());



// 2-masala
// class Student {
//     firstName: string
//     lastName: string
//     grade: number


//     constructor(firstName: string, lastName: string, grade: number){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.grade = grade
//     }

//     getFullName():string {
//         return this.firstName + " " + this.lastName
//     }

//     changeGrade(newGrade:number):void {
//         this.grade = newGrade
//     }
// }

// const student = new Student("Maqsadbek", "Masharipov", 9)
// console.log(student.getFullName());
// student.changeGrade(11)




// 3-masala

// class BankAccount {
//     private balance: number


//     constructor(balance: number){
//         this.balance = balance
//     }

//     checkBalance():void{
//         console.log(this.balance);
        
//     }

//     deposit(summa: number):string{
//         this.balance += summa
//         return summa + " so'mli tranzaksiya muvaffaqiyatli amalga oshirildi!"
//     }

//     withdraw(summa: number):string{
//         if (summa > this.balance) {
//             return "Mablag' yetarli emas"
//         }

//         this.balance -= summa

//         return summa + " so'm muvaffaqiyatli yechildi!"
//     }
// }

// const user = new BankAccount(1000)
// user.checkBalance()
// user.deposit(1000)
// user.withdraw(500)
// user.checkBalance()
// console.log(user.withdraw(5000));



// 2. UserAccount
class UserAccount {
  public username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  public changePassword(oldPassword: string, newPassword: string): boolean {
    if (this.password !== oldPassword) return false;
    this.password = newPassword;
    return true;
  }

  protected isActive(): boolean {
    return true;
  }
}

// 3. Interfaces

// Animal
interface Animal {
  name: string;
  age: number;
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string, public age: number) {}

  speak(): void {
    console.log("Woof!");
  }
}

class Cat implements Animal {
  constructor(public name: string, public age: number) {}

  speak(): void {
    console.log("Meow!");
  }
}

// Rental
interface RentalItem {
  id: number;
  name: string;
  pricePerDay: number;
  rentItem(): void;
  returnItem(): void;
}

class CarRental implements RentalItem {
  constructor(
    public id: number,
    public name: string,
    public pricePerDay: number
  ) {}

  rentItem(): void {
    console.log(`${this.name} rented`);
  }

  returnItem(): void {
    console.log(`${this.name} returned`);
  }
}

class HouseRental implements RentalItem {
  constructor(
    public id: number,
    public name: string,
    public pricePerDay: number
  ) {}

  rentItem(): void {
    console.log(`${this.name} house rented`);
  }

  returnItem(): void {
    console.log(`${this.name} house returned`);
  }
}

// 4. Abstract Classes

// Calculator
abstract class Calculator {
  abstract add(a: number, b: number): number;
  abstract subtract(a: number, b: number): number;
  abstract multiply(a: number, b: number): number;
}

class BasicCalculator extends Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Shape
abstract class Shape {
  constructor(public name: string) {}

  abstract getArea(): number;
  abstract getPerimeter(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super("Rectangle");
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// 5. Static va Singleton

// Counter
class Counter {
  static count: number = 0;

  constructor() {
    Counter.count++;
  }

  static getCount(): number {
    return Counter.count;
  }
}

// Singleton Logger
class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    this.logs.push(message);
    console.log("LOG:", message);
  }

  getLogs(): string[] {
    return this.logs;
  }
}

// TEST 

const user = new UserAccount("ali", "1234");
user.changePassword("1234", "5678");

const dog = new Dog("Rex", 3);
dog.speak();

const car = new CarRental(1, "BMW", 100);
car.rentItem();

const calc = new BasicCalculator();
console.log(calc.add(2, 3));

const circle = new Circle(5);
console.log(circle.getArea());

new Counter();
new Counter();
console.log(Counter.getCount());

const logger = Logger.getInstance();
logger.log("Hello Singleton");













