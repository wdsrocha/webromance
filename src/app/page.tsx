'use client'

import Hero from '@/components/Hero';
import { useState, useRef } from 'react';

export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => {
        console.log('Erro ao tocar música');
      });
    }
    setIsPlaying(true);
    setShowHero(true);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.log('Erro ao tocar música');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 relative overflow-hidden">
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/music/nossa-musica.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio HTML5.
      </audio>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${showHero ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
          }`}
      >
        <button
          onClick={startExperience}
          className="group bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Começar experiência romântica"
        >
          <div className="w-16 h-16 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[20px] border-l-pink-500 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-2 group-hover:border-l-pink-600 transition-colors"></div>
          </div>
        </button>
      </div>

      <div
        className={`transition-all duration-1000 ease-in-out ${showHero ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
      >
        {showHero && (
          <>
            <Hero />

            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={toggleMusic}
                className="bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
              >
                {isPlaying ? (
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-4 bg-pink-500 rounded-sm"></div>
                      <div className="w-1.5 h-4 bg-pink-500 rounded-sm"></div>
                    </div>
                  </div>
                ) : (
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-pink-500 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                  </div>
                )}
              </button>

              {isPlaying && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
