import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us", path: "/contact" },
];

function Header() {
  return (
    <div className="bg-primary/10 backdrop:blur-2xl py-4">
      <div className="2xl:w-9/12 w-11/12 mx-auto flex items-center justify-between ">
        {/* logo */}

        <Link
          href={"/"}
          className="flex items-center group w-fit relative overflow-visible"
        >
          <div className="relative">
            {/* The Logo Image */}
            <Image
              src={"/trevolaBlurLogo.png"}
              className="w-fit relative z-10 group-hover:-translate-y-20 group-hover:translate-x-20 transition-transform duration-700 ease-in-out"
              width={60}
              height={60}
              alt="logo"
            />

            {/* The Plane Trail (The Line) */}
            <span
              className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-linear-to-l from-primary/80 to-transparent origin-left -rotate-45 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out pointer-events-none"
              style={{ transformOrigin: "bottom left" }}
            ></span>
          </div>

          <div>
            <h2 className="text-primary text-4xl font-extrabold">trevola</h2>
            <p className="text-primary font-bold text-xs">Travel made easier</p>
          </div>
        </Link>

        {/* nav links */}

        <div className="flex   items-center gap-6">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="relative overflow-hidden text-primary font-extrabold h-6 group"
            >
              <Link href={link.path}>
                <span className="block group-hover:-translate-y-full transition-transform duration-300">
                  {link.name}
                </span>
                <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                  {link.name}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* get started btn + profile */}

        <div>
          {/* <Button className="font-bold" >Get Started</Button> */}

          <>
            <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(1turn);
                    }
                }
            
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#FFF);
                    animation: rotate 4s linear infinite;
                }
            `}</style>
            <div className="rainbow relative z-0 bg-primary overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
              <button className="px-6 text-sm py-2 font-bold cursor-pointer text-white rounded-full  bg-primary backdrop-blur">
                Get Started
              </button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Header;
