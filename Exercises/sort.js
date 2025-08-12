//////////////////////////////////////////////////////////////////
// Задача 1: Упорядочить массив чисел от наименьшего к наибольшему 
const numbers = [5, 2, 9, 1, 7];
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

//////////////////////////////////////////////////////////////////
// Задача 2: Отсортировать массив строк по алфавиту
const fruits = ['banana', 'apple', 'orange', 'kiwi'];
const sortedFruits = fruits.sort();
console.log(sortedFruits);

//////////////////////////////////////////////////////////////////
// Задача 3: Отсортировать массив чисел по убыванию:
const scores = [10, 45, 30, 22, 100];
const sortedScores = scores.sort((a, b) => b - a);
console.log(sortedScores);

//////////////////////////////////////////////////////////////////
// Задача 4: Есть массив объектов. Отсортировать по возрасту (по возрастанию):
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log(sortedUsers);

//////////////////////////////////////////////////////////////////
// Задача 5: Отсортировать массив дат (в формате ISO) от самых старых к самым новым
const dates = ['2024-01-01', '2023-05-10', '2025-07-30'];
const sortedDates = dates.sort((a, b) => new Date(a) - new Date(b));
console.log(sortedDates);

//////////////////////////////////////////////////////////////////
// Задача 6: Отсортировать строки по длине
const words = ['tree', 'a', 'elephant', 'sun'];
const sortedWords = words.sort((a, b) => a.length - b.length);
console.log(sortedWords);

//////////////////////////////////////////////////////////////////
