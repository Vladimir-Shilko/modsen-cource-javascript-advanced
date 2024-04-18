console.log(a); // Ошибка ReferenceError: a is not defined
console.log(b); // Ошибка ReferenceError: b is not defined
console.log(c); // Ошибка ReferenceError: c is not defined

var a = 1;
let b = 2;
const c = 3;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3