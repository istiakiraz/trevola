"use client"
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { useUser } from "@clerk/nextjs";
import { ArrowDown, Globe2, Hotel, MapPin, Plane } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { use } from "react";

const suggestions = [
  {
    title: "Create New Trip",
    subtitle: "Plan a trip from scratch",
    icon: <Globe2 className="text-blue-500 h-5 w-5" />,
  },
  {
    title: "Find Flights",
    subtitle: "Best routes & prices",
    icon: <Plane className="text-purple-500 h-5 w-5" />,
  },
  {
    title: "Book Hotels",
    subtitle: "Top stays for your budget",
    icon: <Hotel className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Build Itinerary",
    subtitle: "Day-by-day trip plan",
    icon: <MapPin className="text-orange-500 h-5 w-5" />,
  },
];

function Hero() {

    const {user} = useUser();
    const router = useRouter();

    const onSend = () =>{
        if(!user){

            router.push("/sign-in");
            return
        }

        // navigate to trip creation page
    }

  return (
    <section className="my-20 flex relative items-center flex-col text-center justify-center ">
      <div className="max-w-4xl relative z-20 mx-auto w-full">
        {/* title + description */}
        <h1 className="text-5xl font-extrabold">
          Every Trip, Thoughtfully{" "}
          <span className="text-primary">Planned by AI</span>
        </h1>
        <p className="mt-6 font-semibold text-lg">
          From idea to itinerary in seconds. Flights, hotels, and AI-powered
          trip planning made effortless.
        </p>

        {/* input area */}
        <div className="mt-6 relative   ">
          <textarea
            placeholder="Describe your trip (e.g. New York → Paris)"
            className="w-full relative h-32 font-bold rounded-2xl focus:outline-none focus:ring-0 border-gray-300  border  resize-none p-5 "
            name=""
            id=""
          ></textarea>

          <Button
            className="p-1 cursor-pointer absolute right-5 hover:scale-105 duration-300 ease-in-out bottom-5"
            size={"icon"} onClick={()=>onSend()}
          >
            {" "}
            <Image
              src={"/trevolaWhiteLogo.png"}
              className="w-fit relative z-10 group-hover:-translate-y-20 group-hover:translate-x-20 transition-transform duration-700 ease-in-out"
              width={60}
              height={60}
              alt="logo"
            />{" "}
          </Button>
        </div>

        {/* suggestion list */}
        <div className="flex  items-center justify-center gap-5 mt-4">
          {suggestions.map((suggestion, idx) => (
            <div
              className="flex items-center cursor-pointer hover:bg-primary/70 hover:text-white duration-200 ease-in-out text-sm font-semibold w-fit px-3 py-2 gap-2 rounded-3xl border"
              key={idx}
            >
              {suggestion.icon}
              <h5>{suggestion.title}</h5>
            </div>
          ))}
        </div>

        {/* video section */}

       

      <div className="mt-20 w-200 flex flex-col items-center  justify-center mx-auto ">

           <h3 className="mb-4 flex items-center gap-2 text-lg" >Not Sure where to start? <span className="font-bold" >  See how it works</span> <ArrowDown/> </h3>

          <HeroVideoDialog
          className="block dark:hidden "
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/Zcx247sfxPM?si=x5wfVYQFVrEDQAZT"
          thumbnailSrc="/demoVideoImg.png"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </div>

      </div>

      <div className=" opacity-10 -mt-20! z-10">
        <Globe />
      </div>
    </section>
  );
}

export default Hero;
