// api/user.js
import service from './http-request';

export const getUser = () => {
	return service.get('/api/getUser');
};
