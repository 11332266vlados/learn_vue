<template>
  <ul class="catalog__list">
    <product-item
      v-for="product in products"
      :product="product"
      v-bind:key="product.id"
    />
  </ul>
</template>

<script>
import ProductItem from './productItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>

<style scoped>

</style>
