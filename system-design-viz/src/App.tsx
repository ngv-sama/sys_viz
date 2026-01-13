import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { principles, Principle } from './data/principles';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import PrincipleCard from './components/PrincipleCard';
import PrincipleDetail from './components/PrincipleDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrinciple, setSelectedPrinciple] = useState<Principle | null>(null);

  // Filter principles based on search and category
  const filteredPrinciples = useMemo(() => {
    return principles.filter((principle) => {
      const matchesSearch =
        searchQuery === '' ||
        principle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        principle.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        principle.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        principle.shortName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || principle.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Press '/' to focus search
    if (e.key === '/' && !selectedPrinciple) {
      e.preventDefault();
      const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
      searchInput?.focus();
    }
    // Press 'Escape' to close modal or clear search
    if (e.key === 'Escape') {
      if (selectedPrinciple) {
        setSelectedPrinciple(null);
      } else if (searchQuery) {
        setSearchQuery('');
      }
    }
  }, [selectedPrinciple, searchQuery]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search and filters */}
        <div className="sticky top-0 z-40 py-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 10, 15, 1) 0%, rgba(10, 10, 15, 0.95) 80%, transparent 100%)',
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search 50 system design principles..."
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-8 mt-4">
          <p className="text-sm text-gray-500">
            Showing <span className="text-white font-medium">{filteredPrinciples.length}</span> of{' '}
            <span className="text-white font-medium">{principles.length}</span> principles
          </p>
          {(searchQuery || selectedCategory) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Principles grid */}
        {filteredPrinciples.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrinciples.map((principle) => (
              <PrincipleCard
                key={principle.id}
                principle={principle}
                onClick={() => setSelectedPrinciple(principle)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No principles found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              System Design Visualized — Interactive learning for distributed systems
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">
                Press <kbd className="px-2 py-0.5 bg-white/5 rounded text-gray-400">/</kbd> to search
              </span>
              <span className="text-sm text-gray-500">
                Press <kbd className="px-2 py-0.5 bg-white/5 rounded text-gray-400">Esc</kbd> to close
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Detail modal */}
      {selectedPrinciple && (
        <PrincipleDetail
          principle={selectedPrinciple}
          onClose={() => setSelectedPrinciple(null)}
        />
      )}
    </div>
  );
}

export default App;
