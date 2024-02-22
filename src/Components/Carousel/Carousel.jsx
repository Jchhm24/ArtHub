import { useState, useEffect } from 'react';

export const Carousel = () => {
    const images = [
        'img/Slider/Cartoon.jpeg',
        'img/Slider/Clasico.png',
        'img/Slider/CienciaFiccion.jpeg',
        'img/Slider/FanArt.jpeg',
        // Añade más rutas de imágenes aquí si lo necesitas
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 3000); // Cambia la imagen cada 3 segundos

        return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    }, [currentImageIndex, images.length]);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative flex overflow-x-hidden" style={{ width: '600px' }}>
            <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentImageIndex * 200}px)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ width: '200px' }}
                    />
                ))}
            </div>
            <button onClick={prevImage} className="absolute top-1/2 left-0 ml-2">Prev</button>
            <button onClick={nextImage} className="absolute top-1/2 right-0 mr-2">Next</button>
        </div>
    );
};