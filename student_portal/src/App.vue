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