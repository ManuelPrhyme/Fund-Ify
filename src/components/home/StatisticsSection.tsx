import React from 'react';
import { Users, Coins, TrendingUp } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: <Users size={28} />,
      value: '10,000+',
      label: 'Creators',
      description: 'Active creators from around the world',
    },
    {
      icon: <Coins size={28} />,
      value: '8.2M ETH',
      label: 'Total Raised',
      description: 'Successfully funded to date',
    },
    {
      icon: <TrendingUp size={28} />,
      value: '94%',
      label: 'Success Rate',
      description: 'Campaigns reaching their funding goals',
    },
  ];
  
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-medium mb-2">{stat.label}</div>
              <div className="text-white/80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;