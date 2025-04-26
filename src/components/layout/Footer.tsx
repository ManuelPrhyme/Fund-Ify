import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                CF
              </div>
              <span className="ml-2 font-bold text-xl">CrowdChain</span>
            </div>
            <p className="text-neutral-300 mb-4">
              A decentralized crowdfunding platform empowering creators and supporting innovative projects through blockchain technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-neutral-300 hover:text-primary transition-colors">
                  Explore Campaigns
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-neutral-300 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/create-campaign" className="text-neutral-300 hover:text-primary transition-colors">
                  Start a Campaign
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary transition-colors">
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore?category=technology" className="text-neutral-300 hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/explore?category=art" className="text-neutral-300 hover:text-primary transition-colors">
                  Art & Culture
                </Link>
              </li>
              <li>
                <Link to="/explore?category=environment" className="text-neutral-300 hover:text-primary transition-colors">
                  Environment
                </Link>
              </li>
              <li>
                <Link to="/explore?category=community" className="text-neutral-300 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/explore?category=business" className="text-neutral-300 hover:text-primary transition-colors">
                  Business
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral-300 mb-4">
              Subscribe to our newsletter for the latest campaigns and updates.
            </p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg text-neutral-800 w-full focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-4 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex items-center text-neutral-300">
              <Mail size={18} className="mr-2" />
              <span>contact@crowdchain.io</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} CrowdChain. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;