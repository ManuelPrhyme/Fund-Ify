import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Campaign } from '../../types';
import FeaturedCampaign from '../campaign/FeaturedCampaign';
import CampaignGrid from '../campaign/CampaignGrid';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface FeaturedCampaignsSectionProps {
  featuredCampaign: Campaign;
  trendingCampaigns: Campaign[];
}

const FeaturedCampaignsSection: React.FC<FeaturedCampaignsSectionProps> = ({
  featuredCampaign,
  trendingCampaigns,
}) => {
  const navigate = useNavigate();
  
  const handleSeeAll = () => {
    navigate('/explore');
  };
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Discover Amazing Projects</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore innovative ideas and creative projects from our community of creators and entrepreneurs.
          </p>
        </div>
        
        {/* Featured Campaign */}
        <FeaturedCampaign campaign={featuredCampaign} className="mb-12" />
        
        {/* Trending Campaigns */}
        <div className="mb-8 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-secondary">Trending Now</h3>
          <Button 
            variant="ghost" 
            rightIcon={<ArrowRight size={16} />}
            onClick={handleSeeAll}
          >
            See All
          </Button>
        </div>
        
        <CampaignGrid campaigns={trendingCampaigns} columns={3} />
      </div>
    </section>
  );
};

export default FeaturedCampaignsSection;