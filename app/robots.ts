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
    sitemap: 'https://orangefactory.kr/sitemap.xml',
  };
};

export default robots;
