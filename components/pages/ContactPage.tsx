import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-uol-blue py-16 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-2 text-uol-gray-300">{subtitle}</p>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We're here to help and answer any questions you might have." />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-uol-blue mb-4">Get in Touch</h2>
                <div className="flex items-center text-lg mb-4">
                  {/* Fix: Changed class to className */}
                  <ion-icon name="location-outline" className="text-uol-gold text-2xl mr-4"></ion-icon>
                  <span>Quetta Road, Zerh Karez, Loralai, Balochistan, Pakistan</span>
                </div>
                <div className="flex items-center text-lg mb-4">
                  {/* Fix: Changed class to className */}
                  <ion-icon name="call-outline" className="text-uol-gold text-2xl mr-4"></ion-icon>
                  <span>+92 (824) 410701</span>
                </div>
                <div className="flex items-center text-lg">
                  {/* Fix: Changed class to className */}
                  <ion-icon name="mail-outline" className="text-uol-gold text-2xl mr-4"></ion-icon>
                  <span>info@uoli.edu.pk</span>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-uol-blue mb-4">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-uol-gold focus:border-uol-gold" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-uol-gold focus:border-uol-gold" />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea id="message" placeholder="Your Message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-uol-gold focus:border-uol-gold"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-uol-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.783854181829!2d68.59101661512808!3d30.583344981689623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2c9f4d7153a81%3A0x7d6b38c035661138!2sUniversity%20of%20Loralai!5e0!3m2!1sen!2s!4v1698336340156!5m2!1sen!2s"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;