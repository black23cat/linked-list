import Node from './node.js';

export default class LinkedList {
  constructor({ head = null } = {}) {
    this._head = head;
    this._tail = this._head;
    this._size = 0;
  }

  append(value) {
    this._size++;
    if (this._head === null) {
      this._head = new Node(value);
      this._tail = this._head;
      return;
    }
    const newNode = new Node(value);
    this._tail.nextNode = newNode;
    this._tail = newNode;
  }

  prepend(value) {
    this._size++;
    if (this._head === null) {
      this._head = new Node(value);
      this._tail = this._head;
      return;
    } else {
      const currentHead = new Node(this._head.value, this._head.nextNode);
      this._head = new Node(value);
      this._head.nextNode = currentHead;
    }
  }

  size() {
    if (this._head === null) return 'List is empty.';

    return this._size;
  }

  head() {
    return this._head;
  }

  tail() {
    if (this._head === null) return 'List is empty';
    return this._tail;
  }

  at(index) {
    if (index < 0 || index > this._size) return 'Index out of bounds';
    if (this._head === null) {
      return 'List is empty';
    }

    let currentIndex = 0;
    let currentNode = this._head;
    while (currentIndex < index && currentNode.nextNode !== null) {
      currentIndex += 1;
      currentNode = currentNode.nextNode;
    }
    if (index > currentIndex) {
      return 'Index out of bounds';
    } else {
      return currentNode;
    }
  }

  pop() {
    let currentNode = this._head;
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    this._tail = currentNode;
    this._size--;
  }

  contains(value) {
    if (this._head === null) {
      return 'List is empty';
    }
    let currentNode = this._head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    if (this._head === null) return 'List is empty';
    let index = 0;
    let currentNode = this._head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      index += 1;
      currentNode = currentNode.nextNode;
    }
    return `"${value}" is not found`;
  }

  toString() {
    if (this._head === null) return 'List is empty';

    let currentNode = this._head;
    let value = `(${currentNode.value}) -> `;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      value += `(${currentNode.value}) -> `;
    }
    value += `(${currentNode.nextNode})`;
    return value;
  }

  insertAt(value, index) {
    const currentListSize = this.size();
    if (index < 0 || index > currentListSize) return 'Index out of bounds';

    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === currentListSize) {
      this.append(value);
      return;
    }
    const prevNode = this.at(index - 1);
    const nextNode = prevNode.nextNode;
    const insertedNode = new Node(value);
    prevNode.nextNode = insertedNode;
    insertedNode.nextNode = nextNode;
    this._size++;
  }

  removeAt(index) {
    const currentListSize = this.size();
    if (index < 0 || index > currentListSize) return 'Index out of bounds';

    this._size--;
    if (index === 0 && currentListSize - 1 === 0) {
      this._head = null;
      return;
    }
    if (index === 0) {
      this._head = this._head.nextNode;
      return;
    }
    const prevNode = this.at(index - 1);
    const nextNode = prevNode.nextNode.nextNode;
    prevNode.nextNode = nextNode;
  }
}
