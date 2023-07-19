<script>
export default {
  props: ['currentFilter'],
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by);
    },
  },
};
</script>

<template>
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{ active: currentFilter === 'all' }"
    >
      All
    </button>
    <button
      @click="updateFilter('complited')"
      :class="{ active: currentFilter === 'complited' }"
    >
      Complited
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: currentFilter === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<style>
.filter-nav {
  padding: 10px 0;
}
.filter-nav button {
  background: none;
}

.filter-nav .active {
  border-radius: 0;
  border-bottom: 2px solid var(--color-border-done);
}
</style>
