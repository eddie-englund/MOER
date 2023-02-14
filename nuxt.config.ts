// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			apiBase: 'https://moer.api.mingodesk.com/api',
		},
	},
	srcDir: './src/',
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/_globals.scss";',
				},
			},
		},
	},
	modules: [
		'@nuxt/content',
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore'],
			},
		],
	],
	content: {
		highlight: {
			theme: 'github-dark',
		},
	},
});
