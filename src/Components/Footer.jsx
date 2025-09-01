import React from 'react';
import { Github, Linkedin, Globe, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/VijaySudhakar-S',
      color: 'hover:text-gray-300' // softer white on hover
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vijay-sudhakar/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Portfolio',
      icon: Globe,
      url: 'https://vijaysudhakar-portfolio.web.app/',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Developer Info */}
          <div className="flex items-center space-x-2">
            <span className="text-sm">Developed with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-sm">by</span>
            <span className="font-semibold">Vijay Sudhakar</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${link.color} transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800`}
                  aria-label={link.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          {/* Copyright */}
          <div className="text-xs text-gray-400 text-center">
            <p>&copy; {new Date().getFullYear()} RecipeHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
