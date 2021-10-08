<template>
  <v-card width="600" max-width="90%">
    <v-card-title>Todos List</v-card-title>

    <v-text-field
      @keyup.enter="createTodoList"
      v-model="todoName"
      placeholder="Create or Rename Todo List"
    />

    <v-list two-line>
      <v-slide-x-transition group>
        <v-list-item v-for="(todo, index) in todos" v-bind:key="index">
          <v-list-item-title>
            <v-btn block :to="`/todo/${index}`"
              >{{ index + 1 }}. {{ todo.name }} | Total:
              {{ todo.array.length }}</v-btn
            >
          </v-list-item-title>
          <v-btn dark class="btn-delete" @click="removeTodoList(index)">
            Delete
          </v-btn>
        </v-list-item>
      </v-slide-x-transition>
    </v-list>
  </v-card>
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
    removeTodoList(index) {
      this.$store.commit("todos/removeTodoList", index);
    }
  }
};
</script>
