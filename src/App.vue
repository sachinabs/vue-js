<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Mynav from './components/Nav.vue'

</script>

<template>
  <!-- add Nav -->
  <Mynav />
  <RouterView />
</template>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
