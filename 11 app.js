import { addTask, removeTask, listTasks } from './todo.js';

addTask({ id: 1, title: 'Buy groceries', done: false });
addTask({ id: 2, title: 'Read chapter 5', done: false });
addTask({ id: 3, title: 'Pay bills', done: false });

console.log(`After adding: ${JSON.stringify(listTasks(), null, 2)}`);

const removed = removeTask(2);
console.log(`Removed task: ${JSON.stringify(removed)}`);

console.log(`Final tasks: ${JSON.stringify(listTasks(), null, 2)}`);