class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor(head = null, tail = null) {
    this.head = null;
    this.tail = null;
  }

  add(number) {
    // your code here
    let current = this.head;
    const newNode = new Node(number, null);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    while (current.next_node !== null) {
      current = current.next_node;
    }
    current.next_node = newNode;
  }

  get(index) {
    // your code here
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
