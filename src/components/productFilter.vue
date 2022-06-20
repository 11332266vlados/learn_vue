<template>
  <aside class="filter">
    <h2 class="filter__title">Фильтры</h2>

    <form class="filter__form form" action="#" method="get">
      <fieldset class="form__block">
        <legend class="form__legend">Цена</legend>
        <label for="filter_1" class="form__label form__label--price">
          <input id="filter_1" class="form__input" type="text" name="min-price"
                 v-model.number="currentPriceFrom" value="0">
          <span class="form__value">От</span>
        </label>
        <label for="filter_2" class="form__label form__label--price">
          <input id="filter_2" class="form__input" type="text" name="max-price"
                 v-model.number="currentPriceTo" value="12345">
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Категория</legend>
        <label for="select_1" class="form__label form__label--select">
          <select v-model.number="currentCategoryId"
                  id="select_1" class="form__select" name="category">
            <option value="0">Все категории</option>
            <option v-for="category in categories"
                    :value="category.id" :key="category.id">{{ category.title }}
            </option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Цвет</legend>
        <ul class="colors">
          <li v-for="color in colors" :key="color.id" class="colors__item">
            <label :for="'filter_color_'+color.id" class="colors__label">
              <input :id="'filter_color_'+color.id"
                     class="colors__radio sr-only" type="radio" name="color"
                     :value="color.id"
                     v-model="currentColorId"
                     :checked="color.id === currentColorId">
              <span class="colors__value" :style="{'background-color':color.title}">
                  </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Объемб в ГБ</legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label for="filter_10" class="check-list__label">
              <input id="filter_10" class="check-list__check sr-only" type="checkbox"
                     name="volume" value="8" checked="">
              <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label for="filter_11" class="check-list__label">
              <input id="filter_11" class="check-list__check sr-only" type="checkbox"
                     name="volume" value="16">
              <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label for="filter_12" class="check-list__label">
              <input id="filter_12" class="check-list__check sr-only" type="checkbox"
                     name="volume" value="32">
              <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label for="filter_13" class="check-list__label">
              <input id="filter_13" class="check-list__check sr-only" type="checkbox"
                     name="volume" value="64">
              <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label for="filter_14" class="check-list__label">
              <input id="filter_14" class="check-list__check sr-only" type="checkbox"
                     name="volume" value="128">
              <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
            </label>
          </li>
          <li class="check-list__item">
            <label for="filter_15" class="check-list__label">
              <input id="filter_15" class="check-list__check sr-only" type="checkbox"
                     name="volume" value="264">
              <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button @click.prevent="updateFilter"
              class="filter__submit button button--primery" type="submit">
        Применить
      </button>
      <button @click.prevent="resetFilter"
              class="filter__reset button button--second" type="button">
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script>
import Categories from '@/data/categories';
import Colors from '@/data/colors';

export default {
  props: ['filterPriceFrom', 'filterPriceTo', 'filterCategory', 'filterColor'],
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentColorId: 0,
    };
  },
  name: 'productFilter',
  watch: {
    filterPriceFrom(value) {
      this.currentPriceFrom = value;
    },
    filterPriceTo(value) {
      this.currentPriceTo = value;
    },
    filterCategory(value) {
      this.currentCategoryId = value;
    },
    filterColor(value) {
      this.currentColorId = value;
    },
  },
  methods: {
    updateFilter() {
      this.$emit('update:filterPriceFrom', this.currentPriceFrom);
      this.$emit('update:filterPriceTo', this.currentPriceTo);
      this.$emit('update:filterCategory', this.currentCategoryId);
      this.$emit('update:filterColor', this.currentColorId);
    },
    resetFilter() {
      this.$emit('update:filterPriceFrom', 0);
      this.$emit('update:filterPriceTo', 0);
      this.$emit('update:filterCategory', 0);
      this.$emit('update:filterColor', 0);
    },
  },
  computed: {
    categories() {
      return Categories;
    },
    colors() {
      return Colors;
    },
  },
};
</script>

<style scoped>

</style>
