
import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-uol-blue py-16 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2 text-uol-gray-300">{subtitle}</p>
    </div>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="About Us" subtitle="Our Journey, Mission, and Vision" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-uol-blue mb-4">Our History</h2>
              <p className="text-gray-700 space-y-4">
                The University of Loralai was established through the University of Loralai Act, 2009, passed by the Balochistan Provincial Assembly. Its creation marked a significant milestone in making higher education accessible to the population of Loralai Division and surrounding regions. Since its inception, UOLI has been dedicated to overcoming educational backwardness by providing high-quality, relevant academic programs and fostering a culture of research and innovation.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" alt="University library and study hall" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-uol-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-uol-blue mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide accessible, high-quality education that is relevant to the needs of our society. We aim to equip students with the knowledge, skills, and values necessary to become leaders and innovators, contributing to the socio-economic development of the region and the country.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-uol-blue mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be a leading center of academic excellence, recognized for its commitment to research, innovation, and community engagement. We aspire to create a vibrant learning environment that nurtures talent, promotes critical thinking, and prepares students for global challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-uol-blue">Campus & Facilities</h2>
            <p className="mt-4 text-lg text-gray-600">A modern environment designed for learning and growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <div className="text-uol-gold text-4xl mb-3"><ion-icon name="library"></ion-icon></div>
              <h4 className="text-xl font-semibold mb-2">Modern Library</h4>
              <p>Access to a vast collection of books, journals, and digital resources.</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="text-uol-gold text-4xl mb-3"><ion-icon name="flask"></ion-icon></div>
              <h4 className="text-xl font-semibold mb-2">State-of-the-Art Labs</h4>
              <p>Fully equipped science and computer labs for hands-on experience.</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="text-uol-gold text-4xl mb-3"><ion-icon name="football"></ion-icon></div>
              <h4 className="text-xl font-semibold mb-2">Sports Facilities</h4>
              <p>Promoting physical well-being with grounds for various sports.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;