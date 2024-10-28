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
          <div className="flex justify-end mt-6 p-4 w-11/12">
            <Logout />
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
