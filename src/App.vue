<template>
  <component :is="currentPageComponent" :page-params="currentPageParams"/>
</template>

<script>
import eventBus from '@/eventBus';
import mainPage from './pages/mainPage.vue';
import productPage from './pages/productPage.vue';
import notFoundPage from './pages/notFoundPage.vue';

const routes = {
  main: 'mainPage',
  product: 'productPage',
};
export default {
  components: {
    mainPage,
    productPage,
    notFoundPage,
  },
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {
        id: 0,
      },
    };
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'notFoundPage';
    },
  },
  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  },
};
</script>
