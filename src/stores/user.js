import { defineStore } from 'pinia';
import axios from 'axios';
import { getUser } from '@/api/user';

export const useUserStore = defineStore('user', {
	state: () => ({
		user: null,
		error: null,
	}),
	actions: {
		async fetchUser() {
			try {
				const response = await getUser();
				this.user = response.data;
			} catch (error) {
				this.error = 'Error fetching user';
				console.error(error);
			}
		},
	},
});
