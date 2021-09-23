// const connect = require("./client");
// console.log("Connecting ...");
// connect();

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };

const jsonString = '{"a":1, "b":2, "foo":"bar"}';
const obj = JSON.parse(jsonString);
delete obj.foo;
console.log(obj);
