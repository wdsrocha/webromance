'use client'

import { pageContent } from '@/data/content';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Hero() {
    const { title, message, imagePath, buttonText, whatsappLink } = pageContent;
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => {
                    console.log('Autoplay foi bloqueado pelo navegador');
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 relative">
            <div className="absolute top-4 right-4 z-10">
                <button
                    onClick={toggleMusic}
                    className="bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
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

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-800 text-center mb-8 leading-tight">
                {title}
            </h1>

            <div className="bg-white p-4 pb-20 shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-300 ease-in-out mb-8">
                <div className="relative w-64 h-80 md:w-80 md:h-90">
                    <Image
                        src={imagePath}
                        alt="Foto romântica de Glícia e Wesley comemorando 11 meses de namoro"
                        fill
                        className="object-cover rounded-sm"
                        priority
                    />
                </div>
            </div>

            <p className="font-sans text-lg md:text-xl text-gray-700 text-center mt-8 max-w-md leading-relaxed">
                {message}
            </p>

            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
                {buttonText}
            </a>
        </div>
    );
} 