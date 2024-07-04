const mainRoutes = [
	{
		path: '/fantastic/demo/dashboard',
		name: 'Dashboard',
		component: () => import('../views/demo/Dashboard'),
	},
	{
		path: '/fantastic/demo/icon',
		name: 'Icon',
		component: () => import('../views/demo/DemoIcon'),
	},
	{
		path: '/fantastic/demo/color',
		name: 'Color',
		component: () => import('../views/demo/DemoColor'),
	},
];

export { mainRoutes };
