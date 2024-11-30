import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Rules from './components/Rules';
import Controls from './components/Controls';
import Properties from './components/Properties';
import LoadingScreen from './components/LoadingScreen';
import ImageGallery from './components/ImageGallery';
import { useLoading } from './hooks/useLoading';

function App() {
  const isLoading = useLoading(1000);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen isLoading={isLoading} />
        ) : (
          <>
            <Header />
            <main className="pt-16">
              <section id="home" className="min-h-screen">
                <Hero />
              </section>
              
              <section id="gallery" className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                  Unsere Welt
                </h2>
                <ImageGallery />
              </section>

              <section id="rules">
                <Rules />
              </section>

              <section id="controls">
                <Controls />
              </section>

              <section id="properties">
                <Properties />
              </section>
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;