<script>
export default {
  props: ['todo'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/todos/' + this.todo.id,
    };
  },

  methods: {
    toggleDatails() {
      this.showDetails = !this.showDetails;
    },
    deleteTodo() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.todo.id))
        .catch((err) => console.log(err.message));
    },
    toggleComplite() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isComplite: !this.todo.isComplite }),
      })
        .then(() => this.$emit('complite', this.todo.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<template>
  <div
    class="todo"
    :class="{ priority: todo.isPriority, done: todo.isComplite }"
  >
    <div class="todo__item">
      <h3 class="todo__title" @click="toggleDatails">{{ todo.title }}</h3>
      <p class="todo__desc" v-if="showDetails">{{ todo.details }}</p>
    </div>

    <div class="todo__actions">
      <router-link :to="{ name: 'EditTodo', params: { id: todo.id } }"
        ><span class="todo__icon"><v-icon name="fa-pen" scale="1.2" /></span
      ></router-link>

      <span class="todo__icon" @click="deleteTodo"
        ><v-icon name="fa-trash" scale="1.2"
      /></span>
      <span class="todo__icon" @click="toggleComplite"
        ><v-icon
          name="fa-check"
          scale="1.4"
          :fill="todo.isComplite ? 'green' : ''"
      /></span>
    </div>
  </div>
</template>

<style>
.todo {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-left: 5px solid var(--color-border-pending);
  border-radius: 6px;
  background-color: white;
  padding: 40px 20px;
  margin: 0 auto 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
}

.todo.priority {
  background-color: var(--color-bg-priority);
}

.todo.done {
  border-left: 5px solid var(--color-border-done);
}

.todo__item {
  width: 80%;
}

.todo__title {
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}

.todo__desc {
  padding: 0;
}

.todo__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.todo__icon {
  cursor: pointer;
  color: var(--color-text);
}
</style>
