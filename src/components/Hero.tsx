import { pageContent } from '@/data/content';
import Image from 'next/image';

export default function Hero() {
    const { title, message, imagePath, buttonText, whatsappLink } = pageContent;

    return (
        <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
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