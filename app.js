class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  append(data) {
    let node = new Node(data);
    let currentNode;

    if (!this.head) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      this.size++;
    }
  }

  prependAt(data, index) {
    let node = new Node(data);
    let currentNode = this.head;
    let previousNode;
    let count = 0;

    if (index > 0 && index > this.size) {
      return;
    } else if (index === 0) {
      this.prepend(data);
      return;
    } else {
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }

      previousNode.next = node;
      node.next = currentNode;
      this.size++;
    }
  }

  getNodeDataAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (index === count) {
        console.log(current.data);
      }
      current = current.next;
      count++;
    }
  }

  removeNodeAt(index) {
    let currentNode = this.head;
    let count = 0;
    let previousNode;

    if (index > 0 && index > this.size) {
      return;
    } else if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }

      previousNode.next = currentNode.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
    console.log('list is cleared');
  }

  printNodeListData() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }

    this.size++;
  }
}

const ll = new LinkedList();

ll.prepend(300);
ll.prepend(200);
ll.append(400);

ll.printNodeListData();
ll.size();
