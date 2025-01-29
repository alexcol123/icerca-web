import React from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

import { DonateButton } from "../buttons/Buttons";

interface HeroSectionProps {
  backgroundImage?: string;
  title: string | React.ReactNode;

  buttonText?: string;
  onButtonClick?: () => void;
  showAlert?: boolean;
  alertMessage?: string;
  imageAlt?: string;
  brightness?: number;
}

const HeroSection = ({
  backgroundImage = "/images/blankImg.jpg",
  title = "title",


  showAlert = true,
  alertMessage = "URGENT: Families need protection now more than ever",
  imageAlt = "Background Image",
  brightness = 50,
}: HeroSectionProps) => {
  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src={backgroundImage}
              alt={imageAlt}
              fill
              priority
              className={`object-cover brightness-${brightness}`}
              sizes="100vw"
              quality={90}
            />
          </div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white mb-4">
            <h1 className="text-5xl md:text-6xl font-bold  whitespace-pre-line mb-20 bg-black bg-opacity-50 p-4 rounded-lg">
              {title}
            </h1>

            <DonateButton btnText="Donate" />
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="bg-destructive/10 text-destructive py-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-4">
            <AlertTriangle className="w-6 h-6 " />
            <p className="text-sm  md:text-lg  font-medium">{alertMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
