<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a @click.prevent="undo()" @keydown.left="undo()"
         class="pagination__link pagination__link--arrow"
         :class="{'pagination__link--disabled':!canUndo}"
         aria-label="Предыдущая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a href="#" @click.prevent="paginate(pageNumber)" class="pagination__link"
         :class="{'pagination__link--current': pageNumber === page}">
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a @keydown.right="next()" @click.prevent="next()"
         class="pagination__link pagination__link--arrow" href="#"
         :class="{'pagination__link--disabled':!canNext}"
         aria-label="Следующая страница">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['page', 'count', 'perPage'],
  name: 'basePagination',
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
    canNext() {
      return this.page !== this.pages;
    },
    canUndo() {
      return this.page !== 1;
    },
  },
  methods: {
    paginate(page) {
      this.$emit('update:page', page);
    },
    next() {
      if (this.canNext) {
        this.$emit('update:page', this.page + 1);
      }
    },
    undo() {
      if (this.canUndo) {
        this.$emit('update:page', this.page - 1);
      }
    },
  },
};
</script>

<style scoped>

</style>
