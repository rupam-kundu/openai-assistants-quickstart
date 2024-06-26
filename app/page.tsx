"use client";

import React from "react";
import styles from "./page.module.css";
import Hero from "./components/hero";
import FunctionCalling from "./examples/all/page";

const Home = () => {
  return (
    <div className="h-fit">
      <Hero />
      <FunctionCalling />
    </div>
  );
};

export default Home;
