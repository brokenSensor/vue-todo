<template>
  <v-layout column justify-center align-center>
    <v-flex align-self-center>
      <v-card width="600" max-width="100%">
        <v-card-title>Todos List</v-card-title>

        <v-card-text>
          <v-text-field
            @keyup.enter="createTodoList"
            v-model="todoName"
            placeholder="Create or Rename Todo List"
          />

          <v-list two-line>
            <v-list-item v-for="(todo, index) in todos" v-bind:key="index">
              <v-list-item-title>
                <v-btn block :to="`/todo/${index}`"
                  >{{ index + 1 }}. {{ todo.name }}</v-btn
                >
              </v-list-item-title>

              <v-btn
                :disabled="todoName.length < 1"
                @click="renameTodoList({ todoIndex: index, name: todoName })"
              >
                Rename
              </v-btn>

              <v-btn dark class="btn-delete" @click="removeTodoList(index)">
                Delete
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
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
