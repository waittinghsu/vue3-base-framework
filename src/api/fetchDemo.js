// api/fetchDemo.js
import service from './http-request';

export const fetchDemo = () => {
	return service.get('/api/fetchDemo');
};
