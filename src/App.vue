<template>
  <v-app>
    <v-main>
      <div><navCom /></div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    navCom:Navbar,
  }
};
</script>
