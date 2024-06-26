"use client";

import React from "react";
import styles from "./page.module.css";
import Hero from "./components/hero";
import FunctionCalling from "./examples/all/page";

const Home = () => {
  /*
  const categories = {
    "Basic chat": "basic-chat",
    "Function calling": "function-calling",
    "File search": "file-search",
    All: "all",
  };
  */

  return (
    <div>
      <Hero />
      <FunctionCalling />
    </div>
    /*
    <main className={styles.main}>
      <div className={styles.title}>
        Explore sample apps built with Assistants API
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
    */
  );
};

export default Home;
