import React, { useState, useEffect } from 'react';
import { Principle, getCategoryColor } from '../data/principles';
import Visualization from './Visualization';

interface PrincipleDetailProps {
  principle: Principle;
  onClose: () => void;
}

export const PrincipleDetail: React.FC<PrincipleDetailProps> = ({ principle, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(true);
  const categoryColor = getCategoryColor(principle.category);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card transition-all duration-500 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.95) 0%, rgba(10, 10, 15, 0.98) 100%)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200 group"
        >
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with visualization */}
        <div
          className="relative p-8 pb-4"
          style={{
            background: `radial-gradient(ellipse at top, ${principle.color}15 0%, transparent 60%)`,
          }}
        >
          {/* Category and ID */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1.5 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${categoryColor}20`,
                color: categoryColor,
                border: `1px solid ${categoryColor}40`,
              }}
            >
              {principle.category}
            </span>
            <span className="text-sm text-gray-500">Principle #{principle.id}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {principle.name}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            {principle.description}
          </p>
        </div>

        {/* Interactive Visualization */}
        <div
          className="mx-8 mb-8 p-6 rounded-2xl visualization-container cursor-pointer"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            border: `1px solid ${principle.color}30`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="h-48 md:h-64">
            <Visualization principle={principle} isHovered={isHovered} />
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Hover over the visualization to see it animate
          </p>
        </div>

        {/* Content Grid */}
        <div className="px-8 pb-8 grid md:grid-cols-2 gap-6">
          {/* Key Concepts */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: principle.color }}
              />
              Key Concepts
            </h2>
            <ul className="space-y-3">
              {principle.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: principle.color, opacity: 0.6 }}
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div
            className="p-6 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: principle.color }}
              />
              Common Use Cases
            </h2>
            <div className="flex flex-wrap gap-2">
              {principle.useCases.map((useCase, idx) => (
                <span
                  key={idx}
                  className="px-3 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: `${principle.color}15`,
                    color: principle.color,
                    border: `1px solid ${principle.color}30`,
                  }}
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with related info */}
        <div
          className="px-8 py-6 border-t"
          style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Part of the <span className="text-gray-300">{principle.category}</span> category
            </div>
            <div
              className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: principle.color }}
              onClick={handleClose}
            >
              <span>Back to all principles</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleDetail;
