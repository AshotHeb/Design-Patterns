// Mediator pattern -ը կապ է ստեղծում իրարից տարբեր օբյեկտների մեջ առանց նրանց մեջ որևէ կախվածությունների :
class Socket {
  constructor(name) {
    this.server = null;
    this.name = name;
  }

  send(event, toSocket) {
    this.server.send(event, this, toSocket);
  }

  receive(event, fromSocket) {
    console.log(`Received: ${event} from: ${fromSocket.getName()}`);
  }

  getName() {
    return this.name;
  }
}

class Server {
  constructor() {
    this.sockets = [];
  }

  addSocket(socket) {
    socket.server = this;
    this.sockets.push(socket);
  }

  send(event, fromSocket, toSocket) {
    toSocket.receive(event, fromSocket);
  }
}

const socket1 = new Socket("A");
const socket2 = new Socket("B");

const server = new Server();

server.addSocket(socket1);
server.addSocket(socket2);

socket1.send("Hello", socket2);
socket2.send("Hello", socket1);
