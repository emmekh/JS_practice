//////////////////////////////////////////////////////////////////
// Задача 1: Проверить, содержится ли число 5 в массиве 
const numbers = [1, 3, 5, 7, 9];
const isNumIncluded = numbers.includes(5);
console.log(isNumIncluded);

//////////////////////////////////////////////////////////////////
// Задача 2: Проверить, содержит ли строка 'javascript' подстроку 'script'
const str = 'javascript';
const isStr = str.includes('script');
console.log(isStr);

//////////////////////////////////////////////////////////////////
// Задача 3: Проверить, есть ли значение 'admin' в массиве ролей
const roles = ['user', 'editor', 'admin'];
const isRole = roles.includes('admin');
console.log(isRole);

//////////////////////////////////////////////////////////////////
// Задача 4: Проверить, содержит ли текст 'The quick brown fox' слово 'Fox' (с учётом регистра)
const str1 = 'The quick brown fox';
const isStr1 = str1.includes('Fox');
console.log(isStr1);

//////////////////////////////////////////////////////////////////
// Задача 5: Проверить, есть ли в списке разрешённых IP-адресов адрес '192.168.1.10'
const allowedIPs = ['192.168.1.1', '192.168.1.5', '192.168.1.10'];
const isAllowed = allowedIPs.includes('192.168.1.10');
console.log(isAllowed);

//////////////////////////////////////////////////////////////////
// Задача 6: Проверить, содержится ли символ '@' в строке email
const email = 'user@example.com';
console.log(email.includes('@'));

//////////////////////////////////////////////////////////////////