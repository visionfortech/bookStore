<template>
  <div v-if="cart.length > 0">
    <app-header></app-header>
    <div class="title">
      <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
    </div>
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id" ></product-details>
    </template>
  </div>
  <div v-else class="title"><app-header></app-header><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1></div>
</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  import AppHeader from '@/pages/Header.vue'
  export default {
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    components: {
      productDetails: ProductDetails,
      'app-header': AppHeader
    }
  }
</script>