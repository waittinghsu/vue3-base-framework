import Layout from '@/layout/index.vue';

const mainRoutes = [
	{
		path: '/fantastic',
		name: 'fantastic',
		redirect: '/fantastic/demo/dashboard',
		component: Layout,
		meta: {},
		children: [
			{
				path: 'demo/dashboard',
				name: 'Dashboard',
				component: () => import('../views/demo/Dashboard/index.vue'),
			},
			{
				path: 'demo/color',
				name: 'Color',
				component: () => import('../views/demo/DemoColor/index.vue'),
			},
			{
				path: 'demo/icon',
				name: 'Icon',
				component: () => import('../views/demo/DemoIcon/index.vue'),
			},
		]
	},

];

export { mainRoutes };
