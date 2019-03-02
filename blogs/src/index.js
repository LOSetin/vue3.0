import Vue from 'vue';
import App from './App.vue';
// eslint-disable-next-line import/no-unresolved
// require('./index.css');

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: h => h(App),
}).$mount(root);
