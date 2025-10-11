class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

// insert at the beginning
  insertFirst(value){
    this.head = new Node(value, this.head);
    this.size++;
  }

// print the list data
  printData() {
    let current = this.head;
    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }

// insert at the end
  insertLast(value){
    const newNode = new Node(value);
      if(!this.head){
	this.head = newNode;
      }else{
	let current = this.head;
	  while(current.next){
	    current = current.next;
	  }
	current.next = newNode;
      }
 }

// Insert at the end
  insertEnd(value){
    const newNode = new Node(value);
    
  }
  
}

const list = new List();
list.insertFirst(10);
list.insertFirst(20);
list.insertLast(30);
list.insertEnd(40);
console.log(list.size);
console.log(list.head);
list.printData();
