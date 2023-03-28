class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor(head = null) {
    this.head = head;
    this.lenght = 0;
  }

  add(number) {
    // your code here
    let current = this.head;
    let newNode = new Node(number, null);
    if (current === null) {
      this.head = newNode;
    } else {
      // Search for the end of the list
      while (current.next_node) {
        current = current.next_node;
      }
      current.next_node = newNode;
    }
  }

  get_node(index) {
    let current = this.head;
    let pointer = 0;
    while (pointer < index) {
      current = current.next_node;
      pointer += 1;
    }
    return current;
  }

  get(index) {
    // your code here
    let value = this.get_node(index).value;
    return value;
  }

  addAt(index, item) {
    let newNode = new Node(item, null);
    if (index > 0) {
      const node = this.get_node(index - 1);
      newNode.next_node = node.next_node;
      node.next_node = newNode;
    } else {
      newNode.next_node = this.head;
      this.head = newNode;
    }
  }

  remove(index) {
    const node = this.get_node(index);
    if (index > 0) {
      const prev = this.get_node(index - 1);
      prev.next_node = node.next_node;
    } else {
      this.head = node.next_node;
    }
  }
}

const list = new LinkedList();

list.add(3); // 3 5 15
list.add(5); // 7
list.add(15);
list.addAt(1, 7);
console.log(list.get(0));
console.log(list.get(2));

/*
list.addAt(1, 11);
list.addAt(0, 13);

console.log(list.get(2));
// => 11

console.log(list.get(3));
// => 5
*/
module.exports = LinkedList;
