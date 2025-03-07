import LinkedList from './linked-list.js';

const linkedList = new LinkedList();
linkedList.prepend('cat');
linkedList.append('fox');
linkedList.append('rat');
// linkedList.pop();

linkedList.insertAt('cow', 2);
console.log(linkedList.toString());
console.log(linkedList.find('cat'));
linkedList.insertAt('bear', 2);
console.log(linkedList.toString());
