// an array is a list fo elements that are stored contiguously in memory it looks like this

//[1, 2, 3, 4, 5];

// the first element is at index 0

// linked lists are made up of nodes that have a value and a pointer to the next node and looks like this
/*
{
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: null
		}
	}
}
*/

// the first element is at index 0, and for simplicity have shown in nested objects

// define a node, each node is a separate object
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define a linked lists class
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // insert at the beginning
  //insertFirst(value) {
  //	const node = new Node(value);
  //	node.next = this.head;
  //	this.head = node;
  //}
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

console.log(list);
