/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const cars = [
    {
        carBrand: 'Mercedes',
        price: 20000,
        isAvailableForSale: true
    },
    {
        carBrand: 'BWM',
        price: 25000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Jeep',
        price: 13000,
        isAvailableForSale: true
    }
]
console.log(cars);

const newObj = {
    carBrand: 'Opel',
    price: 7000,
    isAvailableForSale: false
}
cars.push(newObj);

console.log(cars);