<script>
export default {
  props: ['id'],

  data() {
    return {
      title: '',
      details: '',
      isPriority: false,
      uri: 'http://localhost:3000/todos/' + this.id,
    };
  },

  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
        this.isPriority = data.isPriority;
      })
      .catch((err) => console.log(err.message));
  },

  methods: {
    handleSubmit() {
      const todo = {
        title: this.title,
        details: this.details,
        isPriority: this.isPriority,
      };
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
      })
        .then(() => this.$emit('edit', todo))
        .then(() => this.$router.push({ name: 'Home' }))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>Todo title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details"></textarea>

    <div>
      <input type="checkbox" v-model="isPriority" />
      <label>Priority</label>
    </div>

    <div class="submit">
      <button>Create Todo</button>
    </div>
  </form>
</template>
