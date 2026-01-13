import React, { useState } from 'react';
import { Principle, getCategoryColor } from '../data/principles';
import Visualization from './Visualization';

interface PrincipleCardProps {
  principle: Principle;
  onClick: () => void;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const categoryColor = getCategoryColor(principle.category);

  return (
    <div
      className="glass-card glass-card-hover cursor-pointer overflow-hidden group"
      style={{
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at center, ${principle.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Visualization container */}
      <div className="relative h-40 p-4 visualization-container">
        <Visualization principle={principle} isHovered={isHovered} />
      </div>

      {/* Content */}
      <div className="relative p-5 pt-2">
        {/* Category tag */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${categoryColor}20`,
              color: categoryColor,
              border: `1px solid ${categoryColor}40`,
            }}
          >
            {principle.category}
          </span>
          <span className="text-xs text-gray-500">#{principle.id}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
          {principle.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
          {principle.description}
        </p>

        {/* Hover indicator */}
        <div
          className="mt-4 flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: principle.color }}
        >
          <span>Explore</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ backgroundColor: principle.color }}
      />
    </div>
  );
};

export default PrincipleCard;
