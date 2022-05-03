import Vue from 'vue';
import HelloWorld from '@/helloWorld';
import alertHelloWorld from '@/alertHelloWorld';
import App from './App.vue';

Vue.config.productionTip = false;

alertHelloWorld.soAlert(HelloWorld.hello);
alertHelloWorld.soAlert(HelloWorld.world);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
