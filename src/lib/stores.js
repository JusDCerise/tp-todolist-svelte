import { writable, derived } from 'svelte/store';
export const id = writable(Date.now());
export const name = writable('test');
export const statut = writable('');

export const greeting = derived(
	name,
	$name => `${$name}`
);