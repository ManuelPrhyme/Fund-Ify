import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Wallet, Bell, LogIn, Plus } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in a real app
  const navigate = useNavigate();

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleStartCampaign = () => {
    navigate('/create-campaign');
  };

  const handleLogin = () => {
    // In a real app, this would trigger auth flow
    setIsLoggedIn(true);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">CF</div>
            <span className="ml-2 font-bold text-xl text-secondary hidden sm:block">CrowdChain</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/explore" className="text-neutral-700 hover:text-primary font-medium">
              Explore
            </Link>
            <Link to="/how-it-works" className="text-neutral-700 hover:text-primary font-medium">
              How It Works
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search campaigns..."
                className="pl-9 pr-4 py-2 border border-neutral-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary w-48"
              />
              <Search size={16} className="absolute left-3 top-2.5 text-neutral-400" />
            </div>
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button className="text-neutral-700 hover:text-primary p-2 rounded-full hover:bg-neutral-100">
                  <Bell size={20} />
                </button>
                <button className="text-neutral-700 hover:text-primary p-2 rounded-full hover:bg-neutral-100">
                  <Wallet size={20} />
                </button>
                <Button variant="primary" onClick={handleStartCampaign} leftIcon={<Plus size={16} />}>
                  Start a Campaign
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleLogin} leftIcon={<LogIn size={16} />}>
                  Connect Wallet
                </Button>
                <Button variant="primary" onClick={handleStartCampaign}>
                  Start a Campaign
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700 p-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search campaigns..."
                className="pl-9 pr-4 py-2 border border-neutral-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <Search size={16} className="absolute left-3 top-2.5 text-neutral-400" />
            </div>
            
            <nav className="flex flex-col space-y-4">
              <Link to="/explore" className="text-neutral-700 font-medium py-2">
                Explore
              </Link>
              <Link to="/how-it-works" className="text-neutral-700 font-medium py-2">
                How It Works
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className="text-neutral-700 font-medium py-2">
                    My Dashboard
                  </Link>
                  <Link to="/notifications" className="text-neutral-700 font-medium py-2">
                    Notifications
                  </Link>
                </>
              ) : (
                <button 
                  className="text-neutral-700 font-medium py-2 flex items-center"
                  onClick={handleLogin}
                >
                  <LogIn size={16} className="mr-2" /> Connect Wallet
                </button>
              )}
              <Button variant="primary" onClick={handleStartCampaign} fullWidth leftIcon={<Plus size={16} />}>
                Start a Campaign
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;