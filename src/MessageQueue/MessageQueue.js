"use strict";

class MessageQueue {
  constructor() {
    this.messages = {};
  }

  add(clientId, message) {
    if (!this.messages[clientId]) {
      this.messages[clientId] = [message];
    } else {
      this.messages[clientId].unshift(message);
    }
  }

  received(clientId, message) {
    if (this.messages[clientId]) {
      let queue = this.messages[clientId];
      let frontOfQueue = queue[queue.length - 1];

      if (frontOfQueue === message) {
        queue.pop();
        return;
      }
    }
    throw new Error("Message Cannot be Transmitted");
  }
  fetch(clientId) {}
  getAll(clientId) {}
}

module.exports = MessageQueue;
