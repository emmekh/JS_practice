//////////////////////////////////////////////////////////////////
// Задача 1: Вывести имена пользователей 
const users = [
    { name: 'Oleg', age: 35 },
    { name: 'Ivan', age: 30 },
    { name: 'Petr', age: 25 }
]
users.forEach((el) => console.log(el.name));

//////////////////////////////////////////////////////////////////
// Задача 2: Увеличить всем баллы на 10
const players = [
    { name: 'Player 1', score: 13 },
    { name: 'Player 2', score: 9 },
    { name: 'Player 3', score: 19 },
]
players.forEach(el => el.score += 10);
console.log(players);

//////////////////////////////////////////////////////////////////
// Задача 3: Сформировать массив длин строк
const words = ['JavaScript', 'Node.js', 'Mongoose', 'Git'];
const lengths = [];
words.forEach(el => lengths.push(el.length));
console.log(lengths);

//////////////////////////////////////////////////////////////////
// Задача 4: Сумма положительных чисел
const numbers = [5, -3, 12, -9, 7, 35, -99, 1];
let sum = 0;
numbers.forEach(el => el > 0 ? sum += el : 0);
console.log(sum);

//////////////////////////////////////////////////////////////////
// Задача 5: Отметить, кто совершеннолетний
const people = [
    { name: 'Alex', age: 17 },
    { name: 'Tom', age: 21 }
]
people.forEach(el => el.isAdult = el.age >= 18);
console.log(people);

//////////////////////////////////////////////////////////////////
// Задача 6: Вывести индекс и значение
const cities = ['Aktau', 'Almaty', 'Shymkent', 'Taraz'];
cities.forEach((el, id) => console.log(`Город ${el} стоит в массиве под индексом ${id}`));

//////////////////////////////////////////////////////////////////
