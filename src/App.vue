<template>
  <v-app>
    <Navbar></Navbar>
    <v-main class="mx-10">
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
      
    }
  }
}
</script>