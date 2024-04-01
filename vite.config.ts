import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: '/src/components',
			$layouts: '/src/layouts',
			$lib: '/src/lib',
			$stores: '/src/stores',
			$styles: '/src/styles'
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
