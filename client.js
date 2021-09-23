const net = require("net");

// handle movements

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50541,
    host: "192.168.12.12",
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: NBS");
    const handleUserInput = function (key) {
      if (key === "\u0003") {
        process.exit();
      }
      if (key === "w") {
        conn.write("Move: up");
      }
      if (key === "s") {
        conn.write("Move: down");
      }
      if (key === "a") {
        conn.write("Move: left");
      }
      if (key === "d") {
        conn.write("Move: right");
      }
    };

    const setupInput = function () {
      const stdin = process.stdin;
      stdin.setRawMode(true);
      stdin.setEncoding("utf8");
      stdin.resume();
      stdin.on("data", handleUserInput);
      return stdin;
    };

    setupInput();
  });

  conn.on("error", () => {
    console.log("connected unsuccessfully");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

connect();
module.exports = connect;
