import Vue from "vue";
import Router from "vue-router";

import index from '@/components/Index';
import Home from "@/components/Home";
import Start from "@/components/Start";
import Me from "@/components/Me";
import Projects from "@/components/Projects";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: index,
			children: [
				{
					path: '',
					name: 'home',
					component: Home,
					meta: {reg: true}
				},
				{
					path: 'start',
					name: 'start',
					component: Start,
				},
				{
					path: 'me',
					name: 'me',
					component: Me,
					meta: { reg: true }
				},
				{
					path: 'projects',
					name: 'projects',
					component: Projects,
					meta: { reg: true }
				}
			]
		},
	],
	mode: 'history'
});
