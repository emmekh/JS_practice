//////////////////////////////////////////////////////////////////
//Задача 1: Сумма всех чисел в массиве
//Дан массив чисел. Найди сумму всех элементов массива с помощью .reduce().
const numbers = [5, 10, 15, 20];
const numbersSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(numbersSum);

//////////////////////////////////////////////////////////////////
//Задача 2: Подсчёт количества повторений
//Дан массив строк. Подсчитай, сколько раз каждое слово встречается в массиве.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const fruitsRepeat = fruits.reduce((acc, curr) => { acc[curr] = (acc[curr] || 0) + 1; return acc }, {});
console.log(fruitsRepeat);

//////////////////////////////////////////////////////////////////
//Задача 3: Объединение строк
//Дан массив слов. Объедини все слова в одну строку, разделённую пробелами.
const words = ['Learning', 'JavaScript', 'is', 'fun'];
const wordsStr = words.reduce((acc, curr) => acc + ' ' + curr, '');
console.log(wordsStr);

//////////////////////////////////////////////////////////////////
//Задача 4: Найти среднее значение
//Дан массив чисел. Вычисли среднее арифметическое всех элементов.
const grades = [70, 85, 90, 100];
const midGrades = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
console.log(midGrades);

//////////////////////////////////////////////////////////////////
//Задача 5: Преобразовать массив в объект
//Дан массив объектов с полями id и value. Преобразуй его в объект вида { [id]: value }.
const items = [
    { id: 'a1', value: 10 },
    { id: 'b2', value: 20 },
    { id: 'c3', value: 30 }
];
const sumItems = items.reduce((acc, curr) => {
    return {
        ...acc,
        [curr.id]: curr.value,
    }
}, {});
console.log(sumItems);

//////////////////////////////////////////////////////////////////
//Задача 6: Удалить дубликаты
//Дан массив чисел. Верни новый массив без повторяющихся значений.
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = nums.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
}, []);
console.log(uniqueNums);

//////////////////////////////////////////////////////////////////
//Задача 7: Подсчёт положительных и отрицательных
//Дан массив чисел. Посчитай, сколько среди них положительных, отрицательных и нулей.
const data = [1, -1, 0, 2, -2, 0, 5];
const res = data.reduce((acc, curr) => {
    if (curr > 0) {
        acc.positive += 1;
    } else if (curr < 0) {
        acc.negative += 1;
    } else {
        acc.zero += 1;
    }
    return acc;
}, { positive: 0, negative: 0, zero: 0 });
console.log(res);

//////////////////////////////////////////////////////////////////
