//////////////////////////////////////////////////////////////////
// Задача 1: Проверить, есть ли хотя бы одно чётное число в массиве 
const nums = [2, 5, 10, 3];
const isOneEven = nums.some(el => el % 2 === 0);
console.log(isOneEven);

//////////////////////////////////////////////////////////////////
// Задача 2: Проверить, содержит ли хотя бы одна строка в массиве подстроку 'error'
const logs = ['init success', 'user logged in', 'critical error occurred'];
const logSome = logs.some(el => el.includes('error'));
console.log(logSome);

//////////////////////////////////////////////////////////////////
// Задача 3: Проверить, что все строки в массиве имеют длину больше 2 символов
const words = ['hi', 'sun', 'sky', 'js'];
const checkWords = words.every(el => el.length > 2);
console.log(checkWords);

//////////////////////////////////////////////////////////////////
// Задача 4: Проверить, есть ли хотя бы один пользователь младше 18 лет
const users = [
    { name: 'Tom', age: 21 },
    { name: 'Lucy', age: 17 },
    { name: 'Mark', age: 25 }
];
const checkAge = users.some(el => el.age < 18);
console.log(checkAge);

//////////////////////////////////////////////////////////////////
// Задача 5: Проверить, являются ли все числа положительными
const num = [2, 5, 10, 3];
const isPositive = num.every(el => el > 0);
console.log(isPositive);

//////////////////////////////////////////////////////////////////
// Задача 6: Проверить, что все товары есть в наличии (inStock: true)
const products = [
    { name: 'Phone', inStock: true },
    { name: 'Laptop', inStock: true },
    { name: 'Tablet', inStock: true }
];
const isInStock = products.every(el => el.inStock);
console.log(isInStock);

//////////////////////////////////////////////////////////////////

