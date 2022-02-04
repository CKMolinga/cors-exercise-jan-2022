<template>
  <div class="home">
    <h1>Student Portal</h1>
    <welcome/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from './components/Welcome.vue'

export default {
  name: 'App', 
  components: {
    Welcome
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 25px 0;
  color: #333;
  font-weight: bold;
  font-size: 3em;
  cursor: pointer;
}
</style>