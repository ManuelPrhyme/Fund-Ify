import React from 'react';
import { FileText, PiggyBank, Rocket, Zap } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <FileText size={30} />,
      title: 'Create Your Campaign',
      description: 'Set up your campaign with details, images, and funding goals. Make it compelling!',
      bgColor: 'bg-primary',
      textColor: 'text-primary',
    },
    {
      icon: <Rocket size={30} />,
      title: 'Launch and Share',
      description: 'Launch your campaign and share it across your networks for maximum visibility.',
      bgColor: 'bg-secondary',
      textColor: 'text-secondary',
    },
    {
      icon: <PiggyBank size={30} />,
      title: 'Get Funded',
      description: 'Receive contributions from backers all over the world using blockchain technology.',
      bgColor: 'bg-primary',
      textColor: 'text-primary',
    },
    {
      icon: <Zap size={30} />,
      title: 'Bring It to Life',
      description: 'Use the funds to bring your idea to life and keep your backers updated on progress.',
      bgColor: 'bg-secondary',
      textColor: 'text-secondary',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How It Works</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our decentralized platform makes crowdfunding simple, secure, and transparent for creators and backers alike.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 mx-auto`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
              <p className="text-neutral-600 text-center">{step.description}</p>
              
              {/* Only show arrows between steps, not after the last one */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="#53234F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.25 12H4.75" stroke="#53234F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-primary/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Lower Fees
            </h3>
            <p className="text-neutral-700">With decentralized technology, we cut out the middlemen and reduce platform fees to just 3%.</p>
          </div>
          
          <div className="bg-secondary/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-secondary flex items-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 10L11 15L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Full Transparency
            </h3>
            <p className="text-neutral-700">All transactions are recorded on the blockchain, providing complete transparency for backers and creators.</p>
          </div>
          
          <div className="bg-tertiary/30 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-secondary flex items-center">
              <div className="w-10 h-10 rounded-full bg-tertiary-dark flex items-center justify-center text-white mr-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              Global Reach
            </h3>
            <p className="text-neutral-700">Connect with backers worldwide without currency exchange fees or international barriers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;