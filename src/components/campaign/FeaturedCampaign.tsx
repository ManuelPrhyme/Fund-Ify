import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Campaign } from '../../types';
import { formatCurrency, getTimeRemaining } from '../../utils/formatters';
import Button from '../ui/Button';
import ProgressBar from '../ui/ProgressBar';
import Tag from '../ui/Tag';
import { ArrowRight, Clock, Users } from 'lucide-react';

interface FeaturedCampaignProps {
  campaign: Campaign;
  className?: string;
}

const FeaturedCampaign: React.FC<FeaturedCampaignProps> = ({ campaign, className = '' }) => {
  const navigate = useNavigate();
  
  const handleViewCampaign = () => {
    navigate(`/campaign/${campaign.id}`);
  };
  
  return (
    <div className={`w-full rounded-xl overflow-hidden bg-white shadow-sm ${className}`}>
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 h-60 lg:h-auto relative">
          <img
            src={campaign.imageUrl}
            alt={campaign.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Tag variant="secondary" size="md">
              Featured
            </Tag>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
          <div className="mb-2">
            <Tag variant="primary" size="sm">{campaign.category.name}</Tag>
          </div>
          
          <h2 className="text-2xl font-bold mb-3 text-neutral-800">{campaign.title}</h2>
          
          <p className="text-neutral-600 mb-6 line-clamp-3">
            {campaign.shortDescription}
          </p>
          
          {/* Progress */}
          <ProgressBar raised={campaign.raised} goal={campaign.goal} className="mb-6" size="lg" />
          
          {/* Stats */}
          <div className="flex justify-between mb-6 text-neutral-600">
            <div>
              <div className="font-medium text-2xl text-neutral-800">{formatCurrency(campaign.raised)}</div>
              <div>raised of {formatCurrency(campaign.goal)}</div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center justify-end space-x-1 mb-1">
                <Users size={18} />
                <span className="font-medium">{campaign.contributorsCount}</span>
              </div>
              <div className="flex items-center justify-end space-x-1 text-primary">
                <Clock size={18} />
                <span>{getTimeRemaining(campaign.deadline)}</span>
              </div>
            </div>
          </div>
          
          {/* Creator & CTA */}
          <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <img 
                src={campaign.creator.avatar} 
                alt={campaign.creator.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <div className="text-sm text-neutral-500">Created by</div>
                <div className="font-medium">{campaign.creator.name}</div>
              </div>
            </div>
            
            <Button
              variant="primary"
              rightIcon={<ArrowRight size={16} />}
              onClick={handleViewCampaign}
            >
              View Campaign
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCampaign;