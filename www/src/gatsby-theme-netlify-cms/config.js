import { createConfig } from 'gatsby-theme-netlify-cms';

const config = createConfig({
  backend: {
    name: 'git-gateway',
    branch: 'master'
  },
  collections: [
    {
      label: 'Blog',
      name: 'blog',
      folder: 'content/posts',
      create: true,
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Slug', name: 'slug', widget: 'string' },
        { label: 'Publish Date', name: 'date', widget: 'datetime' },
        { label: 'Body', name: 'body', widget: 'markdown' }
      ]
    }
  ]
});

export default config;
