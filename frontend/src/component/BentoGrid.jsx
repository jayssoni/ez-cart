import React from 'react'
import { useNavigate } from 'react-router-dom'

function BentoGrid() {
  const navigate = useNavigate()

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          
          {/* Large Featured Box - Spans 6 cols, 2 rows */}
          <div className="col-span-12 md:col-span-6 md:row-span-2 bg-gradient-to-br from-accent to-amber-600 rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            onClick={() => navigate('/collection')}>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615876063796-c3c386b0ecfc?w=800')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Dream Décor
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-light">
                Transform your space into a masterpiece
              </p>
            </div>
            <button className="relative z-10 bg-white text-accent px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition w-fit">
              Explore Collection →
            </button>
          </div>

          {/* Medium Box 1 - 3 cols, 1 row */}
          <div className="col-span-6 md:col-span-3 bg-card border border-border rounded-3xl p-6 flex flex-col justify-center items-center text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate('/collection')}>
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🛋️</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Living Room</h3>
            <p className="text-sm text-muted mt-2">500+ Products</p>
          </div>

          {/* Medium Box 2 - 3 cols, 1 row */}
          <div className="col-span-6 md:col-span-3 bg-card border border-border rounded-3xl p-6 flex flex-col justify-center items-center text-center hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate('/collection')}>
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🛏️</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Bedroom</h3>
            <p className="text-sm text-muted mt-2">300+ Products</p>
          </div>

          {/* Wide Box - 6 cols, 1 row with image */}
          <div className="col-span-12 md:col-span-6 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => navigate('/collection')}>
            <div className="flex h-full">
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <span className="text-sm font-semibold text-accent mb-2">NEW ARRIVALS</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Minimalist Collection
                </h3>
                <p className="text-muted mb-4">Clean lines, maximum impact</p>
                <span className="text-accent font-semibold group-hover:underline">Shop Now →</span>
              </div>
              <div className="w-1/3 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Square Box - 3 cols, 1 row */}
          <div className="col-span-6 md:col-span-3 bg-primary rounded-3xl p-6 flex flex-col justify-center items-center text-center text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => navigate('/collection')}>
            <div className="text-5xl mb-3">💡</div>
            <h3 className="text-lg font-semibold">Lighting</h3>
            <p className="text-sm opacity-80 mt-2">Set the mood</p>
          </div>

          {/* Tall Box - 3 cols, 2 rows */}
          <div className="col-span-6 md:col-span-3 md:row-span-2 bg-card border border-border rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate('/about')}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
              <p className="text-muted leading-relaxed">
                Crafting beautiful spaces since 2024. Every piece tells a story.
              </p>
            </div>
            <div className="mt-6">
              <span className="text-accent font-semibold hover:underline">Learn More →</span>
            </div>
          </div>

          {/* Wide Stat Box - 3 cols, 1 row */}
          <div className="col-span-6 md:col-span-3 bg-secondary rounded-3xl p-6 flex flex-col justify-center">
            <div className="text-4xl font-bold text-foreground">1000+</div>
            <p className="text-muted mt-2">Happy Customers</p>
          </div>

          {/* Medium Image Box - 6 cols, 1 row */}
          <div className="col-span-12 md:col-span-6 bg-card border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate('/collection')}>
            <div className="h-full flex items-center justify-between p-6 md:p-8">
              <div>
                <span className="text-sm font-semibold text-accent mb-2 block">TRENDING</span>
                <h3 className="text-2xl font-bold text-foreground mb-2">Scandinavian Style</h3>
                <p className="text-muted">Nordic elegance for modern homes</p>
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-2xl flex items-center justify-center text-4xl">
                🪑
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BentoGrid
