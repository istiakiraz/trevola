"use client";
import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { UserDetailsContext } from "@/context/UserDetialsContext";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CreateUser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>()

  const { user } = useUser();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    // save new user if not exists

    if (user) {
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress || "",
        imageUrl: user?.imageUrl || "",
        name: user?.fullName || "",
      });

      setUserDetail(result)
    }
  };

  return (
    <UserDetailsContext.Provider value = {{userDetail, setUserDetail}}>
    <div className="min-h-screen h-full w-full relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 40%, #E5F0F7 100%)",
        }}
      />
      <div className="z-10 relative">
        <div className="sticky z-50 top-0">
          <Header />
        </div>
        <main className="relative"> {children}</main>
      </div>
    </div>
    </UserDetailsContext.Provider>
  );
}

export default Provider;

export const useUserDetails = () => {
  return useContext(UserDetailsContext)
}
