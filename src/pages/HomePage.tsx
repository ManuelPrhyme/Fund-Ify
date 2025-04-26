import React from 'react';
import { Campaign, Category } from '../types';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedCampaignsSection from '../components/home/FeaturedCampaignsSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import CategorySection from '../components/home/CategorySection';
import StatisticsSection from '../components/home/StatisticsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

// Sample data - in a real app, this would come from an API
const featuredCampaign: Campaign = {
  id: '1',
  title: 'SolarWave: Portable Solar Generator for Sustainable Living',
  description: 'The SolarWave is an innovative portable solar generator designed for outdoor enthusiasts, remote workers, and emergency preparedness. With high-efficiency solar panels and a powerful battery, it provides clean energy wherever you go.',
  shortDescription: 'A revolutionary portable solar generator providing clean energy for outdoor adventures and emergency preparedness.',
  category: { id: 'tech', name: 'Technology', description: 'Tech projects' },
  creatorId: 'user1',
  creator: {
    id: 'user1',
    name: 'Emily Chen',
    email: 'emily@example.com',
    avatar: 'https://i.pravatar.cc/150?img=20',
    walletAddress: '0x1234...5678',
    createdAt: '2023-01-15',
  },
  goal: 30.0,
  raised: 23.45,
  contributorsCount: 128,
  deadline: '2025-05-30',
  createdAt: '2025-01-15',
  updatedAt: '2025-01-15',
  imageUrl: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
  status: 'active',
  tags: ['solar', 'sustainable', 'green-energy'],
  updates: [],
};

const trendingCampaigns: Campaign[] = [
  {
    id: '2',
    title: 'EcoBlocks: Sustainable Building Materials from Recycled Plastic',
    description: 'We transform plastic waste into durable, affordable building materials for sustainable construction projects globally.',
    shortDescription: 'Transforming plastic waste into sustainable building materials for eco-friendly construction.',
    category: { id: 'env', name: 'Environment', description: 'Environmental projects' },
    creatorId: 'user2',
    creator: {
      id: 'user2',
      name: 'Michael Rodriguez',
      email: 'michael@example.com',
      avatar: 'https://i.pravatar.cc/150?img=14',
      walletAddress: '0x2345...6789',
      createdAt: '2023-02-20',
    },
    goal: 25.0,
    raised: 18.75,
    contributorsCount: 95,
    deadline: '2025-06-15',
    createdAt: '2025-02-01',
    updatedAt: '2025-02-01',
    imageUrl: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg',
    status: 'active',
    tags: ['recycling', 'construction', 'sustainability'],
    updates: [],
  },
  {
    id: '3',
    title: 'UrbanGrow: Community Vertical Farming Initiative',
    description: 'UrbanGrow is bringing vertical farming technology to urban communities, providing fresh produce and educational opportunities.',
    shortDescription: 'Bringing vertical farming to urban communities for local food production and environmental education.',
    category: { id: 'community', name: 'Community', description: 'Community projects' },
    creatorId: 'user3',
    creator: {
      id: 'user3',
      name: 'Sophia Lee',
      email: 'sophia@example.com',
      avatar: 'https://i.pravatar.cc/150?img=23',
      walletAddress: '0x3456...7890',
      createdAt: '2023-03-10',
    },
    goal: 15.0,
    raised: 12.35,
    contributorsCount: 87,
    deadline: '2025-07-20',
    createdAt: '2025-03-01',
    updatedAt: '2025-03-01',
    imageUrl: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg',
    status: 'active',
    tags: ['agriculture', 'community', 'education'],
    updates: [],
  },
  {
    id: '4',
    title: 'ArtVision: AR Gallery for Independent Artists',
    description: 'ArtVision is creating an augmented reality platform where independent artists can showcase and sell their work in immersive digital galleries.',
    shortDescription: 'An augmented reality platform for artists to showcase their work in immersive digital galleries.',
    category: { id: 'art', name: 'Art & Culture', description: 'Art and cultural projects' },
    creatorId: 'user4',
    creator: {
      id: 'user4',
      name: 'David Kim',
      email: 'david@example.com',
      avatar: 'https://i.pravatar.cc/150?img=30',
      walletAddress: '0x4567...8901',
      createdAt: '2023-04-05',
    },
    goal: 20.0,
    raised: 10.8,
    contributorsCount: 64,
    deadline: '2025-08-10',
    createdAt: '2025-04-01',
    updatedAt: '2025-04-01',
    imageUrl: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg',
    status: 'active',
    tags: ['art', 'augmented-reality', 'technology'],
    updates: [],
  },
];

const categories: Category[] = [
  {
    id: 'tech',
    name: 'Technology',
    description: 'Innovative tech projects and gadgets',
    imageUrl: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg',
  },
  {
    id: 'art',
    name: 'Art & Culture',
    description: 'Creative arts and cultural initiatives',
    imageUrl: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg',
  },
  {
    id: 'env',
    name: 'Environment',
    description: 'Projects focused on sustainability and environmental protection',
    imageUrl: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
  },
  {
    id: 'community',
    name: 'Community',
    description: 'Local community initiatives and social projects',
    imageUrl: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Startups and innovative business ventures',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  },
  {
    id: 'music',
    name: 'Music',
    description: 'Music albums, concerts, and instruments',
    imageUrl: 'https://images.pexels.com/photos/4348093/pexels-photo-4348093.jpeg',
  },
  {
    id: 'games',
    name: 'Games',
    description: 'Video games, board games, and interactive entertainment',
    imageUrl: 'https://images.pexels.com/photos/6497004/pexels-photo-6497004.jpeg',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Educational programs, courses, and learning materials',
    imageUrl: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16"> {/* pt-16 to account for fixed header */}
        <HeroSection />
        <FeaturedCampaignsSection featuredCampaign={featuredCampaign} trendingCampaigns={trendingCampaigns} />
        <HowItWorksSection />
        <CategorySection categories={categories} />
        <StatisticsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;