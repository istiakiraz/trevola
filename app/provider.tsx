import React from "react";
import Header from "./_components/Header";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen h-full w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #E5F0F7 100%)",
        }}
      />
      <div className="z-10 relative">
       <div className="sticky z-50 top-0" >
         <Header />
       </div>
       <main className="relative" > {children}</main>
      </div>
    </div>
  );
}

export default Provider;
