<template>
  <div class="app-container">
     <app-header></app-header>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header.vue'

  export default {
    components: {
        AppHeader
    }
  }
</script>

<style scoped>
  .app-container {
    margin: 0 0;
    height: inherit;
    padding: 0 0;
    background: #f9f7f5;
  }
</style>
