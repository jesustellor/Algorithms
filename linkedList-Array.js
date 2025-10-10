class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Define a linked lists class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // getNodeSize
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // insert first nodes
  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  // insert last node
  insertLast(value) {
    let node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // insert at index
  insertAt(value, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertFirst(value);
      return;
    }
    const node = new Node(value);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(current.value);
      }
      current = current.next;
      count++;
    }
    return null;
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  // print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    this.size++;
  }
}

const list = new LinkedList();
list.insertFirst(10);

console.log(list.size);

list.printListData();

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

/*
	const n1 = { 
	  data: 100,
	}

	const n2 = {
		data: 200,
	}

	n1.next = n2;
*/

// define a node, each node is a separate object
