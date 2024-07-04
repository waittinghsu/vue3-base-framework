import { createRouter, createWebHistory } from 'vue-router';
import { mainRoutes } from './systemRouter';

const routes = [
	{
		path: '/',
		redirect: '/fantastic/demo/dashboard',
	},
	...mainRoutes,
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
