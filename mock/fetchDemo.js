// mock/fetchDemo.js
export default [
  {
    url: '/api/fetchDemo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: Array.from({ length: 50 }, ()=> Math.floor(Math.random() * 1000000)),
      };
    },
  },
];
