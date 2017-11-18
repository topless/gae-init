<template>
  <div id="app">
    <div class="container">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'app'
}
</script>
