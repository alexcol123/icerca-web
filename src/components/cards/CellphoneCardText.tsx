"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { BellRing, MoveDown, Smile } from "lucide-react";
import { TestAlertarButton } from "../buttons/Buttons";

const itemsToShow = [
  {
    id: 0,
    text1: "Como funciona",

    showBtn: true,
  },

  {
    id: 1,
    text1: "Vez agentes de ICE",
    smallImageUrl: "/images/peoples/iceagentathomes.jpg",
  },
  {
    id: 2,
    text1: "haz click en el boton",
    icon: <MoveDown size={64} />,
    showBtn: true,
  },

  {
    id: 3,
    text1: "Recibe una Alerta si estas cerca",
    icon: <BellRing size={64} />,
  },

  {
    id: 4,
    largeImageUrl: "/images/mapimg.png",
  },
  {
    id: 5,
    largeImageUrl: "/images/alertany.png",
  },

  {
    id: 6,
    text1: "Para que no te acerques a esa area",
    icon: <Smile size={64} />,
  },

  {
    id: 7,
    text1: "Y puedas estar seguro, junto a tu familia",
    smallImageUrl: "/images/familia.webp",
  },

  {
    id: 8,
    text1: "Tu donacion nos ayuda a proteger a familias",
    smallImageUrl: "/images/familia.webp",
  },
];

const CellphoneCardText = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % itemsToShow.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-72 h-[600px]">
      <div className="absolute inset-0 bg-neutral-900 rounded-[40px]" />
      <div className="absolute inset-[5px] bg-neutral-700 rounded-[35px]" />

      <div className="absolute inset-[10px] bg-black rounded-[30px] overflow-hidden">
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-xl">
          <div className="absolute left-7 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-neutral-950" />
          <div className="absolute left-12 top-1/2 -translate-y-1/2 w-10 h-1 rounded-full bg-neutral-950" />
        </div>

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
            <div className="bg-white w-full h-full flex flex-col items-center justify-center gap-10 px-8">
              {itemsToShow[currentImageIndex].text1 && (
                <h2 className="text-4xl text-center font-bold text-primary">
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
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-neutral-700" />
    </div>
  );
};

export default CellphoneCardText;
