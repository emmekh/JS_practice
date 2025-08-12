//////////////////////////////////////////////////////////////////
// Задача 1: Найти первое чётное число в массиве 
const numbers = [1, 3, 7, 4, 9, 10];
const firstEven = numbers.find(el => el % 2 === 0);
console.log(firstEven);

//////////////////////////////////////////////////////////////////
// Задача 2: Найти объект с именем 'Alice' в массиве
const users = [
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Charlie', age: 28 }
];
const findName = users.find(el => el.name === 'Alice');
console.log(findName);

//////////////////////////////////////////////////////////////////
// Задача 3: Найти индекс первого отрицательного числа
const nums = [5, 3, 0, -1, -3, 7];
const findNegativeId = nums.findIndex(el => el < 0);
console.log(findNegativeId);

//////////////////////////////////////////////////////////////////
// Задача 4: Найти индекс элемента, у которого длина строки больше 5 символов
const words = ['sun', 'tree', 'mountain', 'sky'];
const largeLength = words.findIndex(el => el.length > 5);
console.log(largeLength);

//////////////////////////////////////////////////////////////////
// Задача 5: Найти первую строку, содержащую подстроку 'js'
const technologies = ['html', 'css', 'javascript', 'react', 'js-framework'];
const findString = technologies.find(el => el.includes('js'));
console.log(findString);

//////////////////////////////////////////////////////////////////
// Задача 6: Найти объект студента с баллом выше 90
const students = [
    { name: 'Max', score: 80 },
    { name: 'Lena', score: 95 },
    { name: 'Sam', score: 60 }
];
const findStudent = students.find(el => el.score > 90);
console.log(findStudent);

//////////////////////////////////////////////////////////////////

