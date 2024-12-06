import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
    bundler: webpackBundler(),
    lang: 'en-US',
    title: 'BlackArch Linux Wiki',
    description: 'Official documentation and community wiki for BlackArch Linux',

    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],

        // Preload critical fonts
        ['link', {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        }],
        ['link', {
            rel: 'preload',
            as: 'style',
            href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
        }],

        // Load fonts with display swap
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
            media: 'print',
            onload: "this.media='all'"
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap',
            media: 'print',
            onload: "this.media='all'"
        }],

        // Add meta tags for better mobile experience
        ['meta', { name: 'theme-color', content: '#000000' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    theme: defaultTheme({
        logo: '/images/blackarch-logo.png',
        repo: 'blackarch/wiki',
        docsDir: 'docs',

        navbar: [
            { text: 'Home', link: '/' },
            { text: 'News', link: '/news/' },
            { text: 'Installation', link: '/installation/' },
            { text: 'Tools', link: '/tools/' },
            { text: 'Community', link: '/community/' },
        ],

        sidebar: {
            '/tools/': [
                {
                    text: 'Tools',
                    children: [
                        '/tools/categories.md',
                        '/tools/all-tools.md',
                    ],
                },
            ],
        },
    }),
})

