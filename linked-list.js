import Node from './node.js';

export default class LinkedList {
  constructor({ head = null } = {}) {
    this._head = head;
  }

  append(value) {
    if (this._head === null) {
      this._head = new Node(value);
      return;
    }

    let currentNode = this._head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value);
  }

  prepend(value) {
    if (this._head === null) {
      this._head = new Node(value);
    } else {
      const currentHead = new Node(this._head.value, this._head.nextNode);
      this._head = new Node(value);
      this._head.nextNode = currentHead;
    }
  }

  size() {
    if (this._head === null) return 'List is empty.';

    let size = 1;
    let currentNode = this._head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      size += 1;
    }
    return size;
  }

  head() {
    return this._head;
  }

  tail() {
    if (this._head === null) return 'List is empty';
    let currentNode = this._head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    if (index < 0) return 'Index out of bounds';
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
  }

  removeAt(index) {
    const currentListSize = this.size();
    if (
      typeof currentListSize !== 'number' ||
      index < 0 ||
      index > currentListSize
    )
      return 'Index out of bounds';
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
