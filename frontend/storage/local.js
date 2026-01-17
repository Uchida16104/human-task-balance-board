export function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadLocal(key) {
  const v = localStorage.getItem(key);
  return v ? JSON.parse(v) : null;
}
