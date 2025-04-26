import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../types';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (categoryId: string) => {
    navigate(`/explore?category=${categoryId}`);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Explore Categories</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover projects across different categories and find the ones that align with your interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                <div className="flex items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;