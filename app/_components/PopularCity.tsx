"use client";

import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCity() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      index={index}
      card={{
        ...card,
        content: (
          <DummyContent
            heading={card.content.heading}
            description={card.content.description}
            image={card.content.image}
            alt={card.content.alt}
          />
        ),
      }}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destination to Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

/*  CONTENT  */

const DummyContent = ({
  heading,
  description,
  image,
  alt,
}: {
  heading: string;
  description: string;
  image: string;
  alt: string;
}) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {heading}
        </span>{" "}
        {description}
      </p>

      <Image
        src={image}
        alt={alt}
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

/* ---------------- DATA ---------------- */

const data = [
  {
    category: "Paris, France",
    title: "Romantic city of lights.",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3550&auto=format&fit=crop",
    content: {
      heading: "Paris is not just a city, it’s an experience.",
      description:
        "Walk along the Seine, admire the Eiffel Tower at sunset, explore world-class museums like the Louvre, and enjoy authentic French cuisine in cozy cafés.",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3550&auto=format&fit=crop",
      alt: "Eiffel Tower, Paris",
    },
  },
  {
    category: "Bali, Indonesia",
    title: "Tropical paradise with serene beaches.",
    src: "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=3387&auto=format&fit=crop",
    content: {
      heading: "Bali is pure tropical bliss.",
      description:
        "Relax on golden beaches, explore lush rice terraces, visit ancient temples, and experience peaceful island life with rich culture and traditions.",
      image:
        "https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=3387&auto=format&fit=crop",
      alt: "Bali beach view",
    },
  },
  {
    category: "New York City, USA",
    title: "The city that never sleeps.",
    src: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08",
    content: {
      heading: "New York City moves fast.",
      description:
        "From Times Square to Central Park, NYC offers iconic landmarks, Broadway shows, diverse food, and nonstop energy day and night.",
      image:
        "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08",
      alt: "New York City skyline",
    },
  },
  {
    category: "Tokyo, Japan",
    title: "Where tradition meets future.",
    src: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    content: {
      heading: "Tokyo blends past and future.",
      description:
        "Experience neon-lit streets, ancient temples, futuristic tech, and world-famous cuisine in one of the most vibrant cities on Earth.",
      image:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      alt: "Tokyo cityscape",
    },
  },
  {
    category: "Zermatt, Switzerland",
    title: "Breathtaking Alps and mountain views.",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    content: {
      heading: "Zermatt is a mountain dream.",
      description:
        "Surrounded by the Alps and the iconic Matterhorn, Zermatt offers skiing, hiking, and unforgettable alpine scenery.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      alt: "Zermatt mountains",
    },
  },
  {
    category: "Dubai, United Arab Emirates",
    title: "Luxury, skyline, and desert adventures.",
    src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c",
    content: {
      heading: "Dubai redefines luxury.",
      description:
        "Discover futuristic skyscrapers, desert safaris, luxury shopping, and world-class experiences in the heart of the UAE.",
      image:
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c",
      alt: "Dubai skyline",
    },
  },
];
