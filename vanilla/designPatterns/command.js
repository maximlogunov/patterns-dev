class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function AddOrder(id) {
  return new Command((orders) => {
    orders.push(id);
    console.log(`Adding order ${id}`);
  });
}

function RemoveOrder(id) {
  return new Command((orders) => {
    orders = orders.filter((order) => order !== id);
    console.log(`Removing order ${id}`);
  });
}

function ShowOrders(id) {
  return new Command(() => {
    console.log("Current Order:", id);
  });
}
const orderManager = new OrderManager();

const addOrderCommand = AddOrder(1)
const removeOrderCommand = RemoveOrder(1)
const showOrdersCommand = ShowOrders(1)

console.log(orderManager.execute(addOrderCommand));
console.log(orderManager.execute(showOrdersCommand));
console.log(orderManager.execute(removeOrderCommand))
