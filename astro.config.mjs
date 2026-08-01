// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.christophergoodwin.me',
    fonts: [{
        provider: fontProviders.local(),
        name: "Edmondsans",
        cssVariable: "--font-edmondsans",
        options: {
            variants: [{
                src: ['./src/assets/fonts/edmondsans/edmondsans-regular.woff2'],
                weight: '400',
                style: 'normal'
            },
            {
                src: ['./src/assets/fonts/edmondsans/edmondsans-medium.woff2'],
                weight: '500',
                style: 'normal'
            },
            {
                src: ['./src/assets/fonts/edmondsans/edmondsans-bold.woff2'],
                weight: '700',
                style: 'normal'
            }]
        }
    }]
});
