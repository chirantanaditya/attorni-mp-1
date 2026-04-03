// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
