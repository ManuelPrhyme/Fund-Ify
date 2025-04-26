// Type definitions for the application

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  walletAddress: string;
  createdAt: string;
}

// Campaign types
export interface Campaign {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: Category;
  creatorId: string;
  creator: User;
  goal: number;
  raised: number;
  contributorsCount: number;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
  status: CampaignStatus;
  tags: string[];
  updates: CampaignUpdate[];
}

export interface CampaignUpdate {
  id: string;
  campaignId: string;
  title: string;
  content: string;
  createdAt: string;
  creatorId: string;
}

export type CampaignStatus = 'active' | 'completed' | 'expired';

// Contribution types
export interface Contribution {
  id: string;
  campaignId: string;
  contributorId: string;
  contributor: User;
  amount: number;
  transactionHash: string;
  message?: string;
  createdAt: string;
  anonymous: boolean;
}

// Category types
export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}

// Filter types
export interface CampaignFilters {
  category?: string;
  status?: CampaignStatus;
  sortBy?: 'newest' | 'popular' | 'endingSoon' | 'mostFunded';
  search?: string;
}

// Smart contract types (for reference only, not integrated)
export interface SmartContractCampaign {
  id: string;
  creator: string;
  title: string;
  description: string;
  goal: number;
  deadline: number;
  amountRaised: number;
  contributorsCount: number;
  isActive: boolean;
}