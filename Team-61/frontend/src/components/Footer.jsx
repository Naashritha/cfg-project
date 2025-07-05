import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Organization Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Diksha Foundation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Offering holistic education to children from socially and economically marginalized 
                communities in India. Creating transformative learning spaces for children since 2010.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Vatika Vihar, Road no-4, near Manokamna Mandir, Anand Vihar Colony, 
                  Rukanpura, Patna, Bihar - 800014
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:contact@dikshafoundation.org" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                  contact@dikshafoundation.org
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <a href="tel:+919430011709" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                  +91 9430011709
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-gray-300 text-sm">Tuesday-Sunday: 11AM to 6PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="https://dikshafoundation.org/our-projects/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Our Projects</a></li>
              <li><a href="#mission" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Our Mission</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Our Impact</a></li>
              <li><a href="https://dikshafoundation.org/donate/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Donate</a></li>
              <li><a href="/volunteering" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Volunteering</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Our Programs</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm">
                <span className="text-blue-400 font-semibold">Holistic Education</span> - Social, creative & moral development
              </li>
              <li className="text-gray-300 text-sm">
                <span className="text-blue-400 font-semibold">Life Skills Training</span> - Building confidence & self-esteem
              </li>
              <li className="text-gray-300 text-sm">
                <span className="text-blue-400 font-semibold">Community Outreach</span> - Transformative learning spaces
              </li>
              <li className="text-gray-300 text-sm">
                <span className="text-blue-400 font-semibold">The 3 R's</span> - Relationship, Responsibility & Reverence
              </li>
              <li><a href="https://dikshafoundation.org/donate/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors text-sm font-medium">Support Our Cause</a></li>
            </ul>
          </div>

          {/* Subscribe & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">Subscribe to our newsletter for updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <p className="text-gray-300 text-sm mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/dikshafoundation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                
                <a href="https://twitter.com/dikshatweet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a href="https://www.instagram.com/dikshafoundationngo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>

                <a href="https://dikshafoundation.org/feed/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-sm text-gray-400">
                &copy; 2025 Diksha Foundation. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Disclaimer</a>
              </div>
            </div>
            
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 leading-relaxed">
              Diksha Foundation is a non-profit organisation. We do not represent any political parties or 
              religious beliefs. We do not partner with organisations that do not have documented policies 
              for safeguarding their beneficiaries and staff against exploitation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;