<template>
  <div class="container">
    <div class="container">
      <div class="box">
        <h1 class="header">Todos List</h1>
        <input
          @keyup.enter="createTodoList"
          v-model="todoName"
          type="text"
          placeholder="Create or Rename Todo List"
        />
        <ul class="todos-list">
          <li
            class="list-item"
            v-for="(todo, index) in todos"
            v-bind:key="index"
          >
            <router-link :to="`/todo/${index}`">{{ todo.name }}</router-link>
            <div class="btn-container">
              <button
                class="btn-edit"
                :disabled="todoName.length < 1"
                @click="renameTodoList({ todoIndex: index, name: todoName })"
              >
                Rename
              </button>
              <button class="btn-delete" @click="removeTodoList(index)">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos.array;
    }
  },
  data() {
    return {
      todoName: ""
    };
  },
  methods: {
    createTodoList() {
      if (this.todoName.length > 0) {
        this.$store.commit("todos/createTodoList", this.todoName);
        this.todoName = "";
      }
    },
    renameTodoList({ todoIndex, name }) {
      if (this.todoName.length > 0) {
        this.$store.commit("todos/renameTodoList", { todoIndex, name });
        this.todoName = "";
      }
    },
    removeTodoList(index) {
      this.$store.commit("todos/removeTodoList", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.todos-page {
}
</style>
