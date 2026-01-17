const request = indexedDB.open("HumanTaskDB", 1);

request.onupgradeneeded = e => {
  const db = e.target.result;
  db.createObjectStore("states", { keyPath: "id" });
};
