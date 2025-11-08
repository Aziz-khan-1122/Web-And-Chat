
import React, { useState, useMemo } from 'react';
import { GALLERY_DATA } from '../../constants';
import { GalleryImage } from '../../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-uol-blue py-16 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2 text-uol-gray-300">{subtitle}</p>
    </div>
  </div>
);

type FilterCategory = 'All' | GalleryImage['category'];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('All');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = useMemo(() => {
    if (filter === 'All') return GALLERY_DATA;
    return GALLERY_DATA.filter(img => img.category === filter);
  }, [filter]);

  const categories: FilterCategory[] = ['All', 'Campus', 'Student Life', 'Labs', 'Classrooms'];

  const Modal: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <img 
        src={src} 
        alt="Enlarged view" 
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-4xl">&times;</button>
    </div>
  );

  return (
    <div>
      <PageHeader title="Gallery" subtitle="A Glimpse into Life at the University of Loralai" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                filter === category ? 'bg-uol-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-uol-blue/80 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImg(image.src)}
            >
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImg && <Modal src={selectedImg} onClose={() => setSelectedImg(null)} />}
    </div>
  );
};

export default GalleryPage;
