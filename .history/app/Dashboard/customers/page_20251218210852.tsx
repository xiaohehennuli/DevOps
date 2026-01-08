import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '首页 - 我的网站',
    description: '欢迎访问我的个人网站，这里有最新动态和技术分享。',
    keywords: ['技术博客', '前端开发', 'Next.js', 'React'],
  };
  
  export default function Customer({ params }: { params: { id: string } }) {
    return <div>CustomerDetail Page. {params.id}</div>;
  }
  