/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

// Создайте функцию здесь
const sumObjectValues = (obj) => {
  let res = 0;
  const objKeys = Object.keys(obj);
  objKeys.forEach((key) => {
    if (typeof obj[key] === 'number') {
      res += obj[key];
    }
  });

  return res;
}


const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
