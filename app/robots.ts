import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/', '/auth/', '/admin/'],
      },
    ],
    sitemap: 'https://orangefactory.biz/sitemap.xml',
  };
};

export default robots;
