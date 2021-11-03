"use strict";

const client = require("socket.io-client");
const logDelivery = require("./logDelivery.js");
const faker = require("faker");
const messageClient = client("http://localhost:3030/messages");

//////////////////////////////////////////////////

messageClient.on("connection", (socket) => {
 socket.emit("delivered", logDelivery);
} 
)

function pickup() {
  const store = faker.fake("{{company.companyName}}");
  const id = faker.fake("{{datatype.uuid}}");
  const randomName = faker.name.findName();
  const randomAddress = faker.fake(
    "{{address.streetAddress}}, {{address.cityName}}, {{address.state}} {{address.zipCodeByState}}"
    );
    let payload = {
      store: store,
      orderId: id,
      customer: randomName,
      address: randomAddress,
     };
     messageClient.emit("pickup", payload);
   }
   console.log(pickup());