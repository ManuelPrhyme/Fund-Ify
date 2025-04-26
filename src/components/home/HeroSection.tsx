import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  const handleExplore = () => {
    navigate('/explore');
  };
  
  const handleCreateCampaign = () => {
    navigate('/create-campaign');
  };
  
  return (
    <div className="relative bg-gradient-to-b from-tertiary/20 to-white pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 leading-tight">
              Fund Your Ideas with <span className="text-primary">Blockchain</span> Power
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl">
              Launch your project on the most transparent and secure crowdfunding platform. No middlemen, lower fees, worldwide reach.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handleCreateCampaign}
              >
                Start a Campaign
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleExplore}
                rightIcon={<ArrowRight size={18} />}
              >
                Explore Projects
              </Button>
            </div>
            
            <div className="flex items-center mt-10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-300 overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="font-medium">Trusted by 10,000+ creators</div>
                <div className="text-sm text-neutral-500">Join our growing community</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
                  alt="Crowdfunding project" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Card 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-md p-4 w-48 hidden md:block">
                <div className="text-sm text-neutral-500">Total Raised</div>
                <div className="text-2xl font-bold text-secondary">80.5 ETH</div>
                <div className="mt-1 text-xs text-primary">+12% this month</div>
              </div>
              
              {/* Stats Card 2 */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-md p-4 w-48 hidden md:block">
                <div className="text-sm text-neutral-500">Success Rate</div>
                <div className="text-2xl font-bold text-secondary">94%</div>
                <div className="mt-1 text-xs text-primary">498 successful projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" className="absolute -top-16 left-0 w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,101.3C480,96,600,96,720,106.7C840,117,960,139,1080,138.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;