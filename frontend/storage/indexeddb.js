const req = indexedDB.open("HumanTaskDB", 1);
req.onupgradeneeded = e => {
  e.target.result.createObjectStore("states", { keyPath: "id" });
};
