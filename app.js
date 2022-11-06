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

      this.size++;
      return (currentNode.next = node);
    }
  }

  printListSize() {
    if (!this.head) return null;
    return this.size;
  }

  printHead() {
    if (!this.head) return null;
    return this.head;
  }

  printTail() {
    let current = this.head;
    if (!this.head) return null;
    while (current.next !== null) {
      current = current.next;
    }

    return current;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (index === count) {
        return current.data;
      }
      current = current.next;
      count++;
    }
  }

  contains(value) {
    let currentNode = this.head;

    if (!this.head) return null;
    while (currentNode.next !== null) {
      if (currentNode.data === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return currentNode.data === value ? true : false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;

    if (!this.head) return null;

    while (currentNode.next !== null) {
      if (currentNode.data === value) return index;
      currentNode = currentNode.next;
      index++;
    }

    return currentNode.data === value ? index : null;
  }

  insertAt(data, index) {
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

  removeAt(index) {
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
    return `list is cleared`;
  }

  printList() {
    let currentNode = this.head;
    // while (currentNode) {
    //   console.log(currentNode.data);
    //   currentNode = currentNode.next;
    // }
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
ll.prepend(100);
ll.append(400);

ll.printList();
