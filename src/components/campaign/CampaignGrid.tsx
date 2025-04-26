import React from 'react';
import { Campaign } from '../../types';
import CampaignCard from './CampaignCard';

interface CampaignGridProps {
  campaigns: Campaign[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const CampaignGrid: React.FC<CampaignGridProps> = ({
  campaigns,
  columns = 3,
  className = '',
}) => {
  // Responsive column classes
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };
  
  if (campaigns.length === 0) {
    return (
      <div className="text-center py-12 bg-neutral-50 rounded-lg">
        <h3 className="text-xl font-medium text-neutral-600">No campaigns found</h3>
        <p className="text-neutral-500 mt-2">Try adjusting your filters or check back later.</p>
      </div>
    );
  }
  
  return (
    <div className={`grid ${columnClasses[columns]} gap-6 ${className}`}>
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignGrid;