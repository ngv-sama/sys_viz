import React from 'react';
import { categories, getCategoryColor } from '../data/principles';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* All button */}
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          selectedCategory === null
            ? 'bg-white text-black'
            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
        }`}
      >
        All
      </button>

      {/* Category buttons */}
      {categories.map((category) => {
        const color = getCategoryColor(category);
        const isSelected = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(isSelected ? null : category)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              backgroundColor: isSelected ? color : `${color}15`,
              color: isSelected ? 'white' : color,
              border: `1px solid ${isSelected ? color : `${color}30`}`,
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
