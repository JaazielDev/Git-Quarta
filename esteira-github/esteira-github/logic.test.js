import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addTask, toggleTask, removeTask, countPending } from './logic.js';

test('adiciona tarefa', () => {
  assert.equal(addTask([], 'Estudar Git').length, 2);
});

test('ignora texto vazio', () => {
  assert.equal(addTask([], '   ').length, 0);
});

test('alterna conclusão', () => {
  const [t] = addTask([], 'A');
  assert.equal(toggleTask([t], t.id)[0].done, true);
});

test('remove tarefa', () => {
  const [t] = addTask([], 'A');
  assert.equal(removeTask([t], t.id).length, 0);
});

test('conta pendentes', () => {
  let tasks = addTask(addTask([], 'A'), 'B');
  tasks = toggleTask(tasks, tasks[0].id);
  assert.equal(countPending(tasks), 1);
});
