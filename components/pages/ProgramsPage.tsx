
import React, { useState } from 'react';
import { PROGRAMS_DATA } from '../../constants';
import { Program } from '../../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-uol-blue py-16 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2 text-uol-gray-300">{subtitle}</p>
    </div>
  </div>
);

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-uol-gold hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-uol-blue">{program.name}</h3>
    <p className="text-sm font-semibold text-gray-500 mb-2">{program.duration}</p>
    <p className="text-gray-700">{program.description}</p>
  </div>
);

type FilterCategory = 'All' | Program['category'];

const ProgramsPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('All');

  const undergraduatePrograms = PROGRAMS_DATA.filter(p => p.category === 'Undergraduate');
  const graduatePrograms = PROGRAMS_DATA.filter(p => p.category === 'Graduate');
  const phdPrograms = PROGRAMS_DATA.filter(p => p.category === 'PhD');

  const categories: FilterCategory[] = ['All', 'Undergraduate', 'Graduate', 'PhD'];

  return (
    <div>
      <PageHeader title="Academic Programs" subtitle="Explore our diverse range of degree programs" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-bold text-sm leading-normal border-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-uol-gold ${
                filter === category
                  ? 'bg-uol-blue text-white border-uol-blue'
                  : 'bg-transparent text-uol-blue border-uol-blue hover:bg-uol-blue hover:text-white'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
        
        <div className="space-y-12">
          {/* Undergraduate Programs */}
          {(filter === 'All' || filter === 'Undergraduate') && (
            <section>
              <h2 className="text-3xl font-bold text-uol-blue mb-6 border-b-2 border-uol-gold pb-2">Undergraduate Programs</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {undergraduatePrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </section>
          )}

          {/* Graduate Programs */}
          {(filter === 'All' || filter === 'Graduate') && (
            <section>
              <h2 className="text-3xl font-bold text-uol-blue mb-6 border-b-2 border-uol-gold pb-2">Graduate Programs</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {graduatePrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </section>
          )}
          
          {/* PhD Programs */}
          {(filter === 'All' || filter === 'PhD') && (
            <section>
              <h2 className="text-3xl font-bold text-uol-blue mb-6 border-b-2 border-uol-gold pb-2">PhD Programs</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {phdPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
