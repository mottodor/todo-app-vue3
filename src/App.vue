<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>
<template>
  <h1>Vue Todo App</h1>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
</style>
