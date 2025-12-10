import { tasks } from './storage.js';

export const addTask = (task) => {
    if (!task || typeof task.id === 'undefined' || !task.title) return false;
    tasks.push(task);
    return task;
};

export const removeTask = (id) => {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx === -1) return false;
    return tasks.splice(idx, 1)[0];
};

export const listTasks = () => tasks.slice();