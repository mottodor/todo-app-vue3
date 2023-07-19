<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      title: '',
      details: '',
      isPriority: false,
    };
  },

  methods: {
    handleSubmit() {
      fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
          isPriority: this.isPriority,
        }),
      })
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

<style>
form {
  background: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
}

label {
  color: var(--color-text);

  display: inline-block;
  margin: 25px 0 15px;

  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid gray;
}
textarea {
  display: block;
  width: 100%;
  height: 100px;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  top: 3px;
  margin-right: 8px;
}

legend {
  margin: 0;
}

fieldset label {
  margin: 0;
}

fieldset {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

button {
  background-color: var(--color-border-done);
  padding: 8px 16px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  color: white;
}
</style>
