
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-uol-blue text-white h-[60vh] md:h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop" alt="University of Loralai Campus" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg animate-fade-in-down">Discover the World of Possibility</h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">Join a community dedicated to access, quality, and relevance in education.</p>
          <Link 
            to="/admissions"
            className="bg-uol-gold text-uol-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 duration-300"
          >
            Admissions Open
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-uol-blue">Welcome to the University of Loralai</h2>
            <p className="mt-4 text-lg text-gray-600">Your Gateway to a Brighter Future</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" alt="Students at UOLI" className="rounded-lg shadow-xl" />
            </div>
            <div className="text-gray-700 space-y-4">
              <p className="text-lg">
                The University of Loralai was established to provide quality higher education opportunities to the youth of Loralai Division and its adjacent areas. Our mission is to foster intellectual growth, critical thinking, and research, ensuring our graduates are well-prepared to contribute positively to society.
              </p>
              <p>
                We believe in building trust through transparency, credibility, and an unwavering commitment to our core values: <span className="font-semibold text-uol-blue">Access, Quality & Relevance</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-uol-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Admissions */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-uol-gold text-5xl mb-4 mx-auto w-fit">
                <ion-icon name="school-outline"></ion-icon>
              </div>
              <h3 className="text-2xl font-bold text-uol-blue mb-2">Admissions</h3>
              <p className="text-gray-600 mb-4">Find your path at UOLI. Explore our programs and start your application today.</p>
              <Link to="/admissions" className="font-semibold text-uol-gold hover:text-yellow-500">Learn More &rarr;</Link>
            </div>
            {/* Programs */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-uol-gold text-5xl mb-4 mx-auto w-fit">
                <ion-icon name="library-outline"></ion-icon>
              </div>
              <h3 className="text-2xl font-bold text-uol-blue mb-2">Our Programs</h3>
              <p className="text-gray-600 mb-4">Discover a wide range of undergraduate and graduate degrees designed for success.</p>
              <Link to="/programs" className="font-semibold text-uol-gold hover:text-yellow-500">Explore Programs &rarr;</Link>
            </div>
            {/* Contact */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-uol-gold text-5xl mb-4 mx-auto w-fit">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
              <h3 className="text-2xl font-bold text-uol-blue mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">Have questions? Get in touch with our team for guidance and support.</p>
              <Link to="/contact" className="font-semibold text-uol-gold hover:text-yellow-500">Get in Touch &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;