<template>
  <div class="todo-page">
    <h1>Todo {{ todo.name }}</h1>
    <input
      @keyup.enter="addTodoItem({ todoIndex: id, name: todoItemName })"
      v-model="todoItemName"
      type="text"
      placeholder="Create Todo Item"
    />
    <ul class="todo-list">
      <li v-for="(item, index) in todo.array" v-bind:key="index">
        <div
          class="todo-text"
          @click="
            checkTodoItem({
              todoIndex: id,
              itemIndex: index
            })
          "
        >
          {{ item }}
        </div>

        <button
          class="btn-delete"
          @click="
            removeTodoItem({
              todoIndex: id,
              itemIndex: index
            })
          "
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    todo() {
      return this.$store.state.todos.array[this.id];
    },
    id() {
      return this.$route.params.id;
    }
  },
  data() {
    return {
      todoItemName: ""
    };
  },
  methods: {
    addTodoItem(payload) {
      if (this.todoItemName.length > 0) {
        this.$store.commit("todos/addTodoItem", payload);
        this.todoItemName = "";
      }
    },
    checkTodoItem(payload) {
      this.$store.commit("todos/checkTodoItem", payload);
    },
    removeTodoItem(payload) {
      this.$store.commit("todos/removeTodoItem", payload);
    }
  }
};
</script>
