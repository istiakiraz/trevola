"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SignInButton, useUser } from "@clerk/nextjs";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us", path: "/contact" },
];

function Header() {
  const { user } = useUser();

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
    setIsOpen(!open);
  };

  return (
    <div className="bg-primary/5 backdrop-blur-md py-4">
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
              className="lg:w-fit w-12  relative z-10 group-hover:-translate-y-20 group-hover:translate-x-20 transition-transform duration-700 ease-in-out"
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
            <h2 className="text-primary text-2xl md:text-3xl  lg:text-4xl font-extrabold">
              trevola
            </h2>
            <p className="text-primary font-bold text-[10px] md:text-xs">
              Travel made easier
            </p>
          </div>
        </Link>

        {/* desktop nav links */}

        <div className="md:flex hidden  items-center gap-6">
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

        <div className="md:block hidden">
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

            {user ? (
              <Link href={"/create-new-trip"}>
                <div className="rainbow relative z-0 bg-primary overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                  <button className="px-6 text-sm py-2 font-bold cursor-pointer text-white rounded-full  bg-primary backdrop-blur">
                    Create New Trip
                  </button>
                </div>
              </Link>
            ) : (
              <SignInButton mode="modal">
                <div className="rainbow relative z-0 bg-primary overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                  <button className="px-6 text-sm py-2 font-bold cursor-pointer text-white rounded-full  bg-primary backdrop-blur">
                    Get Started
                  </button>
                </div>
              </SignInButton>
            )}
          </>
        </div>

        {/* Mobile drawer */}
        <Drawer
          open={open}
          onOpenChange={(val) => {
            setOpen(val);
            setIsOpen(val);
          }}
          direction="top"
        >
          <DrawerTrigger asChild>
            <button
              onClick={toggleDrawer}
              type="button"
              className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5">
                <span
                  className={`w-8 h-1 rounded transition-all bg-primary duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-8 h-1 rounded transition-all bg-primary duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-8 h-1 rounded transition-all bg-primary duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </DrawerTrigger>

          <DrawerContent className="h-2/6 w-full md:hidden  bg-primary/10 backdrop-blur-md fixed left-0 top-20 rounded-none">
            <DrawerHeader className="flex items-end justify-end">
              <DrawerClose asChild>
                <button className="text-white cursor-pointer p-2">
                  <X className="h-5 w-5" />
                </button>
              </DrawerClose>
            </DrawerHeader>

            <nav className="flex flex-col  justify-between h-full">
              <div className="flex flex-col items-center text-center  p-5 pt-0 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className=" text-xl text-white border-b w-full  text-center duration-300 ease-in-out hover:text-gray-300"
                  >
                    {link.name}
                  </a>
                ))}

                {user ? (
                  <Link href={"/create-new-trip"}>
                    <div className="rainbow relative z-0 bg-primary my-5 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                      <button className="px-6 text-sm py-2 font-bold cursor-pointer text-white rounded-full  bg-primary backdrop-blur">
                        Create New Trip
                      </button>
                    </div>
                  </Link>
                ) : (
                  <SignInButton mode="modal">
                    <div className="rainbow relative z-0 bg-primary overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                      <button className="px-6 text-sm py-2 font-bold cursor-pointer text-white rounded-full  bg-primary backdrop-blur">
                        Get Started
                      </button>
                    </div>
                  </SignInButton>
                )}
              </div>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
