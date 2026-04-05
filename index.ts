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














