/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const userInfo = {
    name: 'Emil',
    surname: 'Mekhtiyev',
    favoriteNumber: 13
}

const str = `My name is ${userInfo.name} ${userInfo.surname} and my favorite number is ${userInfo.favoriteNumber}`

console.log(str)