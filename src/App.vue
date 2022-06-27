<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {
   Navbar
  },
  methods: {
  },
  computed: {
  },
  created () {
  }
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Raleway");
  $image-path: "~@/../mdb/mdbvue/img";
  @import "~@/../mdb/mdbvue/scss/mdb-pro.scss";
  body {
    font-family: "Raleway", sans-serif !important;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
</style>
