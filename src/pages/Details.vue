<template>
  <div>
    <app-header></app-header>
    <product-details :product="product" :isAdding="true" ></product-details>
  </div>

</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  import AppHeader from '@/pages/Header.vue'
  export default {
    created () {
      if (!this.product.name) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
    },
    computed: {
      product () {
        return this.$store.getters.productById(this.$route.params['id'])
      }
    },
    components: {
      'product-details': ProductDetails,
      'app-header': AppHeader
    }
  }
</script>