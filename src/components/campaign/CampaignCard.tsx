import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Campaign } from '../../types';
import { formatCurrency, getTimeRemaining, truncateText } from '../../utils/formatters';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import Tag from '../ui/Tag';
import { Clock, Users } from 'lucide-react';

interface CampaignCardProps {
  campaign: Campaign;
  className?: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, className = '' }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/campaign/${campaign.id}`);
  };
  
  return (
    <Card 
      className={`w-full ${className}`} 
      hoverEffect
      onClick={handleClick}
    >
      {/* Campaign Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={campaign.imageUrl} 
          alt={campaign.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Tag variant="secondary" size="sm">
            {campaign.category.name}
          </Tag>
        </div>
      </div>
      
      {/* Campaign Content */}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 line-clamp-2 text-neutral-800">
          {campaign.title}
        </h3>
        
        <p className="text-neutral-600 mb-4 line-clamp-2">
          {truncateText(campaign.shortDescription, 100)}
        </p>
        
        {/* Progress Bar */}
        <ProgressBar raised={campaign.raised} goal={campaign.goal} className="mb-4" />
        
        {/* Campaign Stats */}
        <div className="flex justify-between text-sm text-neutral-600">
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{campaign.contributorsCount} backers</span>
          </div>
          
          <div className="flex items-center text-primary font-medium">
            <Clock size={16} className="mr-1" />
            <span>{getTimeRemaining(campaign.deadline)}</span>
          </div>
        </div>
      </div>
      
      {/* Creator */}
      <div className="border-t border-neutral-100 p-4 flex items-center">
        <img 
          src={campaign.creator.avatar} 
          alt={campaign.creator.name}
          className="w-8 h-8 rounded-full mr-2 object-cover"
        />
        <span className="text-sm text-neutral-600">by <span className="font-medium">{campaign.creator.name}</span></span>
      </div>
    </Card>
  );
};

export default CampaignCard;