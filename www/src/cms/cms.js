import CMS, { init } from 'netlify-cms-app';
import FileSystemBackend from 'netlify-cms-backend-fs';
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx';

import BlogPostPreview from './preview-templates/blog-post-preview';

// If running in development
if (process.env.NODE_ENV === 'development') {
  window.CMS_ENV = 'development_overrides'; // Set the CMS_ENV to the development_ overrides.
  CMS.registerBackend('file-system', FileSystemBackend); // Register the FileSystemBackend.
}

CMS.registerWidget('mdx', MdxControl, MdxPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);

// Start NetlifyCMS
init();
