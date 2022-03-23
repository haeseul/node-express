// const myvar = require('./myvar');  // 내가 만든 경로 안에서 찾기
// console.log(myvar.a);

// const name = new a();
// console.log(name.myName);

//const myVar = require('./myvar');

const myVar = require('./myvar');
console.log(myVar);     // { a: 'hello a' }
console.log(myVar.a);   // hello a

const setVar = new myVar();
console.log(setVar.name);   // my instance