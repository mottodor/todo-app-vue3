<script>
import SingleTodo from '../components/SingleTodo.vue';
import FilterNav from '../components/FilterNav.vue';

export default {
  components: { SingleTodo, FilterNav },
  data() {
    return {
      todos: [],
      currentFilter: 'all',
      uri: 'http://localhost:3000/todos',
    };
  },

  computed: {
    filteredTodos() {
      if (this.currentFilter === 'complited') {
        return this.todos.filter((todo) => todo.isComplite === true);
      }
      if (this.currentFilter === 'ongoing') {
        return this.todos.filter((todo) => todo.isComplite === false);
      }
      return this.todos;
    },
  },

  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => (this.todos = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    handleComplite(id) {
      const updatedTodo = this.todos.find((todo) => todo.id === id);
      updatedTodo.isComplite = !updatedTodo.isComplite;
    },
  },
};
</script>

<template>
  <FilterNav
    @filterChange="currentFilter = $event"
    :currentFilter="currentFilter"
  />
  <div v-if="filteredTodos.length" v-for="todo in filteredTodos" :key="todo.id">
    <SingleTodo
      :todo="todo"
      @delete="handleDelete"
      @complite="handleComplite"
    />
  </div>
  <div v-else><h2>Todos loading or try to change filter</h2></div>
</template>
