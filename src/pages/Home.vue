<template>
  <div>
    <app-header></app-header>
    <product-list></product-list>
  </div>
</template>

<script>
  import AppHeader from '@/pages/Header.vue'
  import ProductList from '../components/product/ProductList.vue'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'product-list': ProductList,
      'app-header': AppHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
