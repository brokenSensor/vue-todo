import { createStore } from "vuex";

export const state = () => ({
  array: JSON.parse(localStorage.getItem("todos") || "[]")
});

export const mutations = {
  createTodoList(state, payload) {
    state.array.push({ name: payload, array: [] });
    localStorage.setItem("todos", JSON.stringify(state.array));
  },
  renameTodoList(state, payload) {
    state.array[payload.todoIndex].name = payload.name;
    localStorage.setItem("todos", JSON.stringify(state.array));
  },
  removeTodoList(state, payload) {
    state.array.splice(payload, 1);
    localStorage.setItem("todos", JSON.stringify(state.array));
  },
  addTodoItem(state, payload) {
    state.array[payload.todoIndex].array.push({
      name: payload.name,
      done: false
    });
    localStorage.setItem("todos", JSON.stringify(state.array));
  },
  checkTodoItem(state, payload) {
    state.array[payload.todoIndex].array[payload.itemIndex].done = !state.array[
      payload.todoIndex
    ].array[payload.itemIndex].done;
    localStorage.setItem("todos", JSON.stringify(state.array));
  },
  removeTodoItem(state, payload) {
    state.array[payload.todoIndex].array.splice(payload.itemIndex, 1);
    localStorage.setItem("todos", JSON.stringify(state.array));
  }
};
