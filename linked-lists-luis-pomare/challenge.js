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
    if (current === null) {
      this.head = new Node(number, null);
    } else {
      // Search for the end of the list
      while (current.next_node) {
        current = current.next_node;
      }
      current.next_node = new Node(number, null);
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
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
