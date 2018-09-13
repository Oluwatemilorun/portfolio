// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import colors from "vuetify/es5/util/colors";
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import '@/assets/styles/fonts.css'
// import { createSimpleTransition } from "vuetify/es5/util/helpers";

Vue.use(Vuetify, { 
	iconfont: 'mdi',
	theme: {
		primary: colors.teal.lighten1,
		secondary: colors.teal.darken2,
		accent: colors.amber.accent3,
		error: '#FF5252',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FFC107'
	}
});

// const myTransition = createSimpleTransition("my-transition");

router.beforeEach((to, from, next) => {
	if (to.meta.reg) {
		if (window.sessionStorage.getItem('temilorun_registered')) {
			// setTimeout(() => next(), 5000);
			next();
		}
		else next('/start');
	}
	else {
		next();
	}
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
