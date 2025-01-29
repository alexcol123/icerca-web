import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DonateButton } from "../buttons/Buttons";

interface TestimonialCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  story: string;
  callToAction: string;
  reversed?: boolean;
}

const TestimonialCard = ({
  imageSrc,
  imageAlt,
  name,
  story,
  callToAction,
  reversed = false,
}: TestimonialCardProps) => {
  const ContentSection = () => (
    <div className="flex flex-col justify-center h-full p-8 md:p-12 lg:p-16 bg-gradient-to-br from-rose-500 to-rose-600">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-white">
          {name}
        </h2>
        <div className="space-y-6">
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            {story}
          </p>
          <div className="border-l-4 border-white/20 pl-6 py-2">
            <p className="text-lg md:text-xl font-medium text-white italic">
              {callToAction}
            </p>
          </div>
        </div>


      </div>
      <div className="mt-6 flex items-center justify-center">
        <DonateButton variant="secondary" />
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="relative h-full min-h-[400px] md:min-h-[600px] group overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/30 transition-colors duration-300" />
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={cn(
          "object-cover",
          "transition-transform duration-700 group-hover:scale-105"
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </div>
  );

  const sections = [
    <ImageSection key="image" />,
    <ContentSection key="content" />,
  ];

  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 h-full">
        {reversed ? sections.reverse() : sections}
      </div>
    </section>
  );
};

export default TestimonialCard;
