import { writable, type Writable } from 'svelte/store';

export type AuthModal = 'login' | 'signup' | null;

export interface User {
	email: string;
}
export const authModal: Writable<AuthModal> = writable(null);
export const user: Writable<User | null> = writable(null);
