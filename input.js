const {
  moves: { up, down, left, right },
} = require("./constants");

let connection;

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === up) {
    connection.write("Move: up");
  }
  if (key === down) {
    connection.write("Move: down");
  }
  if (key === left) {
    connection.write("Move: left");
  }
  if (key === right) {
    connection.write("Move: right");
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;
