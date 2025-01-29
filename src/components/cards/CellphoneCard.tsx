"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BellRing, Heart, MoveDown, Shield } from "lucide-react";
import { TestAlertarButton } from "../buttons/Buttons";

const itemsToShow = [
  {
    id: 0,
    text1: "Una App Para Proteger a Nuestra Comunidad",
    showBtn: true,
  },
  {
    id: 1,
    text1: "¿Ves Agentes de ICE en Tu Área?",
    smallImageUrl: "/images/peoples/iceagentathomes.jpg",
  },
  {
    id: 2,
    text1: "Abre la App y Manda tu Ubicación",
    icon: <MoveDown size={64} />,
    showBtn: true,
  },
  {
    id: 3,
    text1: "La App Notifica a Todos en el Área",
    icon: <BellRing size={64} />,
  },
  {
    id: 4,
    text1: "El Mapa Muestra Dónde Hay Peligro",
    largeImageUrl: "/images/mapimg.png",
  },
  {
    id: 5,
    text1: "Conoce las Zonas de Frecuente Actividad",
    largeImageUrl: "/images/alertany.png",
  },
  {
    id: 6,
    text1: "Conoce las Zonas de Frecuente Actividad",
    largeImageUrl: "/images/iceAlertScreenshot2.png",
  },
  {
    id: 7,
    text1: "Tus Reportes Son 100% Anónimos",
    icon: <Shield size={64} />,
  },
  {
    id: 8,
    text1: "Mantente Alejado y Protege a Tu Familia",
    smallImageUrl: "/images/familia.webp",
  },
  {
    id: 9,
    text1: "Tu Apoyo Hará Esta App Realidad",
    showBtn: true,
    icon: <Heart size={64} />,
  },
];

const CellphoneCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const delayTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % itemsToShow.length
        );
      }, 4000);

      return () => clearInterval(timer);
    }, 3000);

    return () => clearTimeout(delayTimer);
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="relative w-72 h-[600px]">
      <div className="absolute inset-0 bg-neutral-900 rounded-[40px]" />
      <div className="absolute inset-[5px] bg-neutral-700 rounded-[35px]" />

      <div className="absolute inset-[10px] bg-black rounded-[30px] overflow-hidden">
        {/* Phone notch */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-xl">
          <div className="absolute left-7 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-neutral-950" />
          <div className="absolute left-12 top-1/2 -translate-y-1/2 w-10 h-1 rounded-full bg-neutral-950" />
        </div>

        {/* Content */}
        <div className="relative w-full h-full">
          {itemsToShow[currentImageIndex].largeImageUrl ? (
            <Image
              src={itemsToShow[currentImageIndex].largeImageUrl}
              alt="Phone content"
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-10 px-6 bg-gray-50">
              {itemsToShow[currentImageIndex].text1 && (
                <h2 className="text-3xl text-center font-bold text-primary">
                  {itemsToShow[currentImageIndex].text1}
                </h2>
              )}

              {itemsToShow[currentImageIndex].icon && (
                <div className="text-2xl text-center font-bold text-primary animate-pulse">
                  {itemsToShow[currentImageIndex].icon}
                </div>
              )}

              {itemsToShow[currentImageIndex].smallImageUrl && (
                <Image
                  src={itemsToShow[currentImageIndex].smallImageUrl}
                  alt="Phone content"
                  width={200}
                  height={200}
                  className="object-cover border-4 border-primary rounded-lg"
                  priority
                />
              )}

              {itemsToShow[currentImageIndex].showBtn && <TestAlertarButton />}
            </div>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {itemsToShow.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-primary w-4"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-neutral-700" />
    </div>
  );
};

export default CellphoneCard;
