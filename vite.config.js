import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [
		svgLoader({
			defaultImport: "component",
			svgoConfig: {
				plugins: [
					{
						name: "removeAttrs",
						params: {
							attrs: "fill",
						},
					},
				],
			},
		})
	],
});
