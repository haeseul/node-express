// module.exports.a = "hello a";

// function myVar() {
//     this.name = "my instance";
// }
// module.exports = myVar;

module.exports.a = "hello a";

function myFunc() {
    this.name = "my instance";
    this.hi = "my instance hi";
}
module.exports = myFunc;