import React from 'react';
import { Category } from '../../types';
import { ChevronDown } from 'lucide-react';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string | null;
  onChange: (categoryId: string | null) => void;
  className?: string;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelectCategory = (categoryId: string | null) => {
    onChange(categoryId);
    setIsOpen(false);
  };
  
  // Find the selected category name
  const selectedCategoryName = 
    selectedCategory 
      ? categories.find(cat => cat.id === selectedCategory)?.name 
      : 'All Categories';
  
  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={toggleDropdown}
      >
        <span>{selectedCategoryName}</span>
        <ChevronDown size={16} className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            <li>
              <button
                type="button"
                className={`block w-full px-4 py-2 text-sm text-left hover:bg-neutral-100 ${
                  selectedCategory === null ? 'bg-primary/10 text-primary font-medium' : 'text-neutral-700'
                }`}
                onClick={() => handleSelectCategory(null)}
              >
                All Categories
              </button>
            </li>
            
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className={`block w-full px-4 py-2 text-sm text-left hover:bg-neutral-100 ${
                    selectedCategory === category.id ? 'bg-primary/10 text-primary font-medium' : 'text-neutral-700'
                  }`}
                  onClick={() => handleSelectCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;