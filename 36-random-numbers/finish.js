/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000
const MAX = 9999

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]
//const myArr = [1, 3, 5, 7, 9]

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomToArray = (arr, min, max) => {
    let arrGetRandom;
    const newArr = [...arr];
    
    do {
        arrGetRandom = getRandom(min, max);
    } while (newArr.includes(arrGetRandom)) 
    
    newArr.push(arrGetRandom);
    return newArr;
}

const newArray = randomToArray(myNumbers, MIN, MAX);
console.log(myNumbers);
console.log(newArray);