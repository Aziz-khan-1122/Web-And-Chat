
import React from 'react';
import { NEWS_DATA } from '../../constants';
import { NewsArticle } from '../../types';
import { Link } from 'react-router-dom';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-uol-blue py-16 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2 text-uol-gray-300">{subtitle}</p>
    </div>
  </div>
);

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
    <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6 flex-grow flex flex-col">
      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
      <h3 className="text-xl font-bold text-uol-blue mb-3 group-hover:text-uol-gold transition-colors duration-300">{article.title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{article.summary}</p>
      <Link to="#" className="font-semibold text-uol-gold self-start hover:text-yellow-500">Read More &rarr;</Link>
    </div>
  </div>
);

const NewsEventsPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="News & Events" subtitle="Stay updated with the latest happenings at UOLI" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEventsPage;