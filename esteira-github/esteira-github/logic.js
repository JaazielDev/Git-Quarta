// Funções puras: fáceis de testar na esteira (CI).
export function addTask(tasks, text) {
  const clean = text.trim();
  if (!clean) return tasks;
  return [...tasks, { id: Date.now() + Math.random(), text: clean, done: false }];
}

export function toggleTask(tasks, id) {
  return tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t));
}

export function removeTask(tasks, id) {
  return tasks.filter(t => t.id !== id);
}

export function countPending(tasks) {
  return tasks.filter(t => !t.done).length;
}
