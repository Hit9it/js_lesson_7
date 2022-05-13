// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [];
let user10 = new User(10, 'Десятий', 'Дес', '10@gmail.com', '0');
let user1 = new User(1, 'Перший', 'Перш', '1@gmail.com', '1234567890');
let user2 = new User(2, 'Другий', 'Друг', '2@gmail.com', '234567890');
let user3 = new User(3, 'Третій', 'Трет', '3@gmail.com', '34567890');
let user4 = new User(4, 'Четвертий', 'Чет', '4@gmail.com', '4567890');
let user5 = new User(5, 'П\'ятий', 'П\'ят', '5@gmail.com', '567890');
let user6 = new User(6, 'Шостий', 'Шост', '6@gmail.com', '67890');
let user7 = new User(7, 'Сьомий', 'Сьом', '7@gmail.com', '7890');
let user8 = new User(8, 'Восьмий', 'Восьм', '8@gmail.com', '890');
let user9 = new User(9, 'Дев\'ятий', 'Дев', '9@gmail.com', '90');


arr = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(arr.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arr.sort((a, b) => a.id - b.id));
//_______________________________________________________________________________
console.log('_________________________________________________________________');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let mass = [];
let client1 = new Client(1, 'Перший', 'Перш', '1@gmail.com', '1234567890',['meat','fish','bread']);
let client2 = new Client(2, 'Другий', 'Друг', '2@gmail.com', '234567890',['meat','fish']);
let client3 = new Client(3, 'Третій', 'Трет', '3@gmail.com', '34567890',['meat','fish','bread','ice-cream']);
let client4 = new Client(4, 'Четвертий', 'Чет', '4@gmail.com', '4567890',['meat','fish']);
let client5 = new Client(5, 'П\'ятий', 'П\'ят', '5@gmail.com', '567890',['meat','fish','bread','ice-cream','apple']);
let client6 = new Client(6, 'Шостий', 'Шост', '6@gmail.com', '67890',['meat','fish','bread']);
let client7 = new Client(7, 'Сьомий', 'Сьом', '7@gmail.com', '7890',['meat','fish','bread','ice-cream','apple']);
let client8 = new Client(8, 'Восьмий', 'Восьм', '8@gmail.com', '890',['meat','fish','bread','ice-cream']);
let client9 = new Client(9, 'Дев\'ятий', 'Дев', '9@gmail.com', '90',['meat','fish']);
let client10 = new Client(10, 'Десятий', 'Дес', '10@gmail.com', '0',['meat']);

mass = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
console.log(mass);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(mass.sort((a, b) => a.order.length - b.order.length));
//_______________________________________________________________________________
console.log('_________________________________________________________________');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, year, maxSpeed, volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function (){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);}
    this.info = function (){
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.producer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.maxSpeed}`);
        console.log(`Об'єм двигуна - ${this.volume}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(`Нова максимальна швидкість - ${this.maxSpeed + newSpeed}`);
    }
    this.changeYear = function (newValue){
        console.log(`Нова рік випуску - ${this.year = newValue}`);
    }
    this.addDriver = function (driver){
        console.log(`Водій машини - ${driver}`);
    }
}

let newCar = new Car(1, 2, 3, 4, 5);
console.log(newCar);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(4);
newCar.changeYear(4);
newCar.addDriver('Перший');
//_______________________________________________________________________________
console.log('_________________________________________________________________');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;

        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        this.info = function () {
            console.log(`Модель - ${this.model}`);
            console.log(`Виробник - ${this.producer}`);
            console.log(`Рік випуску - ${this.year}`);
            console.log(`Максимальна швидкість - ${this.maxSpeed}`);
            console.log(`Об'єм двигуна - ${this.volume}`);
        }
        this.increaseMaxSpeed = function (newSpeed) {
            console.log(`Нова максимальна швидкість - ${this.maxSpeed + newSpeed}`);
        }
        this.changeYear = function (newValue) {
            console.log(`Нова рік випуску - ${this.year = newValue}`);
        }
        this.addDriver = function (driver) {
            console.log(`Водій машини - ${driver}`);
        }
    }
}
let newCarClass = new CarClass(6, 7, 8, 9, 10);
console.log(newCarClass);
newCarClass.drive();
newCarClass.info();
newCarClass.increaseMaxSpeed(5);
newCarClass.changeYear(5);
newCarClass.addDriver('Другий');
//_______________________________________________________________________________
console.log('_________________________________________________________________');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name,age,footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let Cinderellas = [];
let Cinderella1 = new Cinderella('Cinderella', 16, 35);
let Cinderella2 = new Cinderella('Cinderella', 17, 36);
let Cinderella3 = new Cinderella('Cinderella', 18, 37);
let Cinderella4 = new Cinderella('Cinderella', 19, 38);
let Cinderella5 = new Cinderella('Cinderella', 20, 39);
let Cinderella6 = new Cinderella('Cinderella', 21, 40);
let Cinderella7 = new Cinderella('Cinderella', 22, 41);
let Cinderella8 = new Cinderella('Cinderella', 23, 42);
let Cinderella9 = new Cinderella('Cinderella', 24, 43);
let Cinderella10 = new Cinderella('Cinderella', 25, 44);
Cinderellas = [Cinderella1,Cinderella2,Cinderella3,Cinderella4,Cinderella5,Cinderella6,Cinderella7,Cinderella8,Cinderella9,Cinderella10];
console.log(Cinderellas);

class Prince {
    constructor(name,age,shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let newPrince = new Prince('Prince', 23, 39);
for (const Cinderella of Cinderellas){
    if (Cinderella.footSize === newPrince.shoeSize){
        console.log(`Принсцу підійде Попелюшка з розміром ноги ${Cinderella.footSize}, їй ${Cinderella.age} років`);
    }
}
function find (Cinderellas){
    console.log(Cinderellas.find(value => value.footSize === newPrince.shoeSize));
}
find(Cinderellas);