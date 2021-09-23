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
