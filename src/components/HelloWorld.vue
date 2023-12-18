<template lang="">
  <div>
    <h1>{{name}}</h1>
    <v-btn color="success" @click="callEmit()">Call Emit</v-btn>
    <v-btn color="success" @click="callItem('EIEI')">Call Item</v-btn>
  </div>
</template>
<script>
import {EventBus} from '@/EventBus'
export default {

  props:['name'],
  methods:{
    callEmit(){
      // this.$emit('callAlert')
      EventBus.$emit('callAlertService')
    },
    callItem(item){
      // this.$emit('callItem', item)
      EventBus.$emit('callItemService', item)
    }
  }
}
</script>
<style lang="">
  
</style>