import { addTask, toggleTask, removeTask, countPending } from './logic.js';

const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');
const count = document.getElementById('count');

let tasks = [];
try { tasks = JSON.parse(localStorage.getItem('tasks')) || []; } catch { tasks = []; }

function save() {
  try { localStorage.setItem('tasks', JSON.stringify(tasks)); } catch {}
}

function render() {
  list.innerHTML = '';
  tasks.forEach(t => {
    const li = document.createElement('li');
    if (t.done) li.className = 'done';
    const span = document.createElement('span');
    span.textContent = t.text;
    span.onclick = () => { tasks = toggleTask(tasks, t.id); save(); render(); };
    const del = document.createElement('button');
    del.textContent = 'X';
    del.onclick = () => { tasks = removeTask(tasks, t.id); save(); render(); };
    li.append(span, del);
    list.append(li);
  });
  count.textContent = `${countPending(tasks)} tarefa(s) pendente(s)`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  tasks = addTask(tasks, input.value);
  input.value = '';
  save();
  render();
});

render();
