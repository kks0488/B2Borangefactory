import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = 'https://orangefactory.kr';
  const lastModified = new Date();

  // 영어 페이지 (기본)
  const enPages = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/wholesale`, priority: 0.9 },
    { url: `${baseUrl}/inventory`, priority: 0.8 },
    { url: `${baseUrl}/export`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.9 },
  ];

  // 한국어 페이지
  const koPages = [
    { url: `${baseUrl}/ko`, priority: 1 },
    { url: `${baseUrl}/ko/about`, priority: 0.8 },
    { url: `${baseUrl}/ko/services/inventory`, priority: 0.8 },
    { url: `${baseUrl}/ko/services/finance`, priority: 0.8 },
    { url: `${baseUrl}/ko/services/consignment`, priority: 0.8 },
    { url: `${baseUrl}/ko/services/production`, priority: 0.8 },
    { url: `${baseUrl}/ko/services/sourcing`, priority: 0.8 },
    { url: `${baseUrl}/ko/services/export`, priority: 0.8 },
    { url: `${baseUrl}/ko/contact`, priority: 0.9 },
  ];

  // 일본어 페이지
  const jaPages = [
    { url: `${baseUrl}/ja`, priority: 1 },
    { url: `${baseUrl}/ja/about`, priority: 0.8 },
    { url: `${baseUrl}/ja/wholesale`, priority: 0.8 },
    { url: `${baseUrl}/ja/inventory`, priority: 0.8 },
    { url: `${baseUrl}/ja/export`, priority: 0.8 },
    { url: `${baseUrl}/ja/contact`, priority: 0.9 },
  ];

  // 중국어 페이지
  const zhPages = [
    { url: `${baseUrl}/zh`, priority: 1 },
    { url: `${baseUrl}/zh/about`, priority: 0.8 },
    { url: `${baseUrl}/zh/wholesale`, priority: 0.8 },
    { url: `${baseUrl}/zh/inventory`, priority: 0.8 },
    { url: `${baseUrl}/zh/export`, priority: 0.8 },
    { url: `${baseUrl}/zh/contact`, priority: 0.9 },
  ];

  const allPages = [...enPages, ...koPages, ...jaPages, ...zhPages];

  return allPages.map((page) => ({
    url: page.url,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: page.priority,
  }));
};

export default sitemap;
