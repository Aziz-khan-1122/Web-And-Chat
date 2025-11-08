import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-uol-blue text-uol-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">University of Loralai</h3>
            <p className="text-sm text-uol-gray-300">
              Committed to providing "Access, Quality & Relevance" in higher education to empower the youth of Balochistan and beyond.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-uol-gold transition-colors">About Us</Link></li>
              <li><Link to="/admissions" className="hover:text-uol-gold transition-colors">Admissions</Link></li>
              <li><Link to="/programs" className="hover:text-uol-gold transition-colors">Academic Programs</Link></li>
              <li><Link to="/contact" className="hover:text-uol-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                {/* Fix: Changed class to className */}
                <ion-icon name="location-outline" className="mt-1 mr-2 text-uol-gold"></ion-icon>
                <span>Quetta Road, Zerh Karez, Loralai, Balochistan</span>
              </li>
              <li className="flex items-center">
                 {/* Fix: Changed class to className */}
                 <ion-icon name="call-outline" className="mr-2 text-uol-gold"></ion-icon>
                <span>+92 (824) 410701</span>
              </li>
              <li className="flex items-center">
                {/* Fix: Changed class to className */}
                <ion-icon name="mail-outline" className="mr-2 text-uol-gold"></ion-icon>
                <span>info@uoli.edu.pk</span>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-uol-gray-300 hover:text-uol-gold transition-colors text-2xl"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#" className="text-uol-gray-300 hover:text-uol-gold transition-colors text-2xl"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="#" className="text-uol-gray-300 hover:text-uol-gold transition-colors text-2xl"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="#" className="text-uol-gray-300 hover:text-uol-gold transition-colors text-2xl"><ion-icon name="logo-youtube"></ion-icon></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-uol-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} University of Loralai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;