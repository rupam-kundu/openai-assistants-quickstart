"use client";

import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import Hero from "./components/hero";
import FunctionCalling from "./examples/all/page";
import Login from "./login";
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
          <FunctionCalling />
          <Logout />
        </>
        :
        <>
          <Hero />
          <Login />
        </>
      }
    </div>
  );
};

export default Home;
