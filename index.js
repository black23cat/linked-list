import LinkedList from './linked-list.js';

const linkedList = new LinkedList();
linkedList.prepend('cat');
linkedList.append('fox');
linkedList.append('rat');
// linkedList.pop();

// console.log(linkedList.at(1));
linkedList.insertAt('cow', 2);
console.log(linkedList.toString());
// console.log(linkedList.find('cat'));
console.log(linkedList.size());
linkedList.insertAt('bear', 3);
console.log(linkedList.toString());
console.log(linkedList.size());
linkedList.insertAt('platypus', 5);
console.log(linkedList.toString());
console.log(linkedList.size());
linkedList.removeAt(2);
console.log(linkedList.toString());
console.log(linkedList.size());

// console.log(linkedList);
