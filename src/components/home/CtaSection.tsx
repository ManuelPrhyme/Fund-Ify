import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const CtaSection: React.FC = () => {
  const navigate = useNavigate();
  
  const handleStartCampaign = () => {
    navigate('/create-campaign');
  };
  
  const handleExplore = () => {
    navigate('/explore');
  };
  
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Idea to Life?</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Join thousands of creators who have successfully funded their projects through CrowdChain.
          Start your campaign today or explore projects to support.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            variant="tertiary" 
            size="lg" 
            onClick={handleStartCampaign}
          >
            Start a Campaign
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleExplore}
            className="text-white border-white hover:bg-white/10"
          >
            Explore Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;