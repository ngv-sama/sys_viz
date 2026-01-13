import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative py-16 md:py-24 text-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 122, 255, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-400">50 Essential Principles</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          System Design
          <br />
          <span className="text-gradient">Visualized</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
          Interactive visualizations of the most important system design principles.
          <br className="hidden md:block" />
          Explore, learn, and master distributed systems concepts.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 md:gap-12 mt-10">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">50</div>
            <div className="text-sm text-gray-500">Principles</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">8</div>
            <div className="text-sm text-gray-500">Categories</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">∞</div>
            <div className="text-sm text-gray-500">Interactions</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
};

export default Header;
