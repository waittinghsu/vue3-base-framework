export default [
	{
		url: '/api/getUser',
		method: 'get',
		response:  () => {
			// console.log('fetching user...');
			// await new Promise(resolve => setTimeout(resolve, 5000));
			// console.log('fetched user');
			return {
				code: 0,
				message: 'success',
				data: {
					name: ['John Doe', 'Omega', 'Jerome', 'Duke', 'Leon', 'Frank'][Math.floor(Math.random() * 100) % 5],
					age: Math.floor(Math.random() * 70 +20),
				},
			};
		},
	},
];
