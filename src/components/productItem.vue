<template>
  <li class="catalog__item">

    <a class="catalog__pic" href="#" @click.prevent="gotoPage('product', {id: product.id})">
      <img :src="product.image" :alt="product.title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
            {{ product.price | numberFormat }} ₽
            </span>

    <ul class="colors colors--black">
      <li v-for="color in colors" class="colors__item" :key="color.id">
        <label class="colors__label" for="color_1_8BE000">
          <input class="colors__radio sr-only" type="radio"
                 :checked="color.id === product.colorId" :value="color.title">
          <span class="colors__value" :style="{'background-color':color.title}"></span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import colors from '@/data/colors';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  props: ['product'],
  data() {
    return {
      productColor: '#222',
    };
  },
  filters: {
    numberFormat,
  },
  computed: {
    colors() {
      return colors;
    },
  },
  methods: {
    gotoPage,
  },
};
</script>

<style scoped>

</style>
