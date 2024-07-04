// mock/fetchDemo.js
export default [
  {
    url: '/api/fetchDemo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: [1, 2, 3, 4, 5],
      };
    },
  },
];