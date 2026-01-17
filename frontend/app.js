import { saveLocal, loadLocal } from "./storage/local.js";
import "./storage/indexeddb.js";
import "./storage/pouch.js";

window.app = function () {
  return {
    mood: "Normal",
    newTask: "",
    tasks: [],

    init() {
      AOS.init();
      mermaid.initialize({ startOnLoad: true });

      const saved = loadLocal("state");
      if (saved) {
        this.mood = saved.mood;
        this.tasks = saved.tasks;
      }
    },

    addTask() {
      if (!this.newTask) return;
      this.tasks.push({ id: Date.now(), text: this.newTask });
      this.newTask = "";
      saveLocal("state", { mood: this.mood, tasks: this.tasks });
    }
  };
};
