import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Graphics Guide',
  description: 'A modern guide to real-time graphics concepts. Also serves as a hub for other graphics resources.',
  appearance: true, // Enable dark theme by default (this is true by default but I want to be explicit)
  lastUpdated: true, // Display the last updated time based on git timestamp
  themeConfig: {
    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Introduction', link: '/introduction' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Andrew Mitchell'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/realandrew/graphics_guide' }
    ]
  }
})