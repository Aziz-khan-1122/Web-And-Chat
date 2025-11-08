
import React, { useState } from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-uol-blue py-16 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2 text-uol-gray-300">{subtitle}</p>
    </div>
  </div>
);

const AdmissionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  return (
    <div>
      <PageHeader title="Admissions" subtitle="Begin your academic journey at the University of Loralai." />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('undergraduate')}
              className={`${activeTab === 'undergraduate' ? 'border-uol-gold text-uol-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
            >
              Undergraduate
            </button>
            <button
              onClick={() => setActiveTab('graduate')}
              className={`${activeTab === 'graduate' ? 'border-uol-gold text-uol-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
            >
              Graduate
            </button>
             <button
              onClick={() => setActiveTab('phd')}
              className={`${activeTab === 'phd' ? 'border-uol-gold text-uol-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
            >
              PhD
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'undergraduate' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-uol-blue">Undergraduate Programs</h2>
              <p>Eligibility: Intermediate (FA/FSc/ICS) or equivalent with at least 45% marks. Department-specific requirements may apply.</p>
            </div>
          )}
          {activeTab === 'graduate' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-uol-blue">Graduate (Master's) Programs</h2>
              <p>Eligibility: A 4-year Bachelor's degree (BS/BBA/etc.) or a 2-year Master's degree after a 2-year Bachelor's, with a minimum CGPA of 2.5/4.0 or equivalent.</p>
            </div>
          )}
           {activeTab === 'phd' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-uol-blue">PhD Programs</h2>
              <p>Eligibility: MS/M.Phil or equivalent degree with a minimum CGPA of 3.0/4.0. Candidates must also pass the university's entrance test and interview.</p>
            </div>
          )}
        </div>
        
        {/* Application Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-uol-blue mb-8">Application Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-uol-gold text-uol-blue rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Online Application</h3>
              <p>Complete and submit the online admission form through our portal.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-uol-gold text-uol-blue rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Document Submission</h3>
              <p>Upload all required academic documents, CNIC, and photographs.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-uol-gold text-uol-blue rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Admission Offer</h3>
              <p>Successful candidates will receive an admission offer and fee payment instructions.</p>
            </div>
          </div>
           <div className="text-center mt-12">
              <a href="#" className="bg-uol-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300">
                Apply Now
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
