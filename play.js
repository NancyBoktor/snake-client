const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50542,
    host: "135.23.223.133",
  });

  conn.on("connect", () => {
    console.log("connected successfully");
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
console.log("Connecting ...");
connect();
