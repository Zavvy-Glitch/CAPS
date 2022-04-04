"use strict";

const socketio = require("socket.io");
const PORT = process.env.PORT || 3030;
const server = socketio(PORT);
const messages = server.of("/messages");
const logEvent = require("../Hub/hubLog.js");

///////////////////////////////////////////////////

server.on("connection", (socket) => {
  console.log("Socket is connected", socket.id);

  socket.on("message", (payload) => {
    console.log(payload);

    server.emit("received", {
      id: socket.id,
      payload,
    });
  });
});

messages.on("connection", (socket) => {
  console.log(`${socket.id} connected to message server`);

  socket.on("join", (payload) => {
    socket.join(payload.roomname);
  });

  socket.on("message", (payload) => {
    messages.to(payload.room).emit(payload.message);
  });
});

//////////////////////////////////////////////////////////

messages.on("connection", (socket) => {
  socket.emit("pickup", logEvent("pickup"));
});
messages.on("connection", (socket) => {
 socket.emit("in-transit", logEvent("in-transit"));
})
messages.on("connection", (socket) => {
  socket.emit("delivered", logEvent("delivered"));
})

require("../Driver-Client/driverClient.js");
require("../Vendor-Client/vendorClient.js");
