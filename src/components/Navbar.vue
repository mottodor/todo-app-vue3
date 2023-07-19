<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Todos</router-link>
    <router-link :to="{ name: 'AddTodo' }">Add Todo</router-link>
  </nav>
</template>

<style>
.main-nav {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.main-nav a {
  text-decoration: none;
  color: var(--color-text);
  letter-spacing: 1px;
  font-size: 1.5rem;
  padding-bottom: 10px;
}

.router-link-exact-active {
  border-bottom: 2px solid var(--color-border-done);
}
</style>
