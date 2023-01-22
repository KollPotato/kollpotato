import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			assets: "public",
			pages: "public",
			strict: true
		}),
		outDir: "dist"
	}
};

export default config;
