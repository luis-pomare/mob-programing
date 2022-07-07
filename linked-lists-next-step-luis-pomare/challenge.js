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

  get(index) {
    // your code here
    let current = this.head;
    let pointer = 0;
    // Looping till the index element
    while (pointer < index) {
      current = current.next_node;
      pointer += 1;
    }
    return current.value;
  }

  add_at(index, item) {
    let current = this.head;
    let newNode = new Node(item, null);

    if (index === 0) {
      this.head = newNode;
      newNode.next_node = current;
    }
  }

  remove(index) {}
}

const list = new LinkedList();

list.add(3);
list.add(5);
list.addAt(1, 11);
list.addAt(0, 13);

console.log(list.get(2));
// => 11

console.log(list.get(3));
// => 5

module.exports = LinkedList;
