const net = require("net");

const { ip, port } = require("./constants");
const setupInput = require("./input");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port,
    ip,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: NBS");

    setupInput(conn);
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
