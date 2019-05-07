import React from 'react';
import { Post } from 'gatsby-theme-material-ui-blog';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <Post content={widgetFor('body')} title={entry.getIn(['data', 'title'])} />
);

export default BlogPostPreview;
