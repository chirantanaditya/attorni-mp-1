// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
// Set PUBLIC_SITE_URL in deploy env (e.g. Cloudflare Pages) if the live URL differs.
const site = process.env.PUBLIC_SITE_URL || "https://attorni.ai";

export default defineConfig({
	site,
	fonts: [
		{
			name: "Vogun",
			cssVariable: "--font-vogun",
			provider: fontProviders.local(),
			weights: [500],
			styles: ["normal", "italic"],
			formats: ["woff"],
			fallbacks: ["Georgia", "serif"],
			display: "swap",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Vogun-Medium.woff"],
						weight: 500,
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/Vogun-MediumItalic.woff"],
						weight: 500,
						style: "italic",
					},
				],
			},
		},
	],
});
