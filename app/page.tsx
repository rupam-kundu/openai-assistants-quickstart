"use client";

import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import Hero from "./components/hero";
import FunctionCalling from "./examples/all/page";
import Logout from "./logout";

const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="h-fit">
      {user
        ?
        <>
          <div className="flex items-center justify-between mt-6 p-4">
            <h1 className="flex-1 text-3xl font-['Kinto Sans'] font-bold text-blue-900 text-center">
              BioInvestAI
            </h1>
            <div className="">
              <Logout />
            </div>
          </div>
          <FunctionCalling />
        </>
        :
        <>
          <Hero />
        </>
      }
    </div>
  );
};

export default Home;
