"use client";

import React, { useState } from "react";
import styles from "../shared/page.module.css";
import Chat from "../../components/chat";
import WeatherWidget from "../../components/weather-widget";
import { getWeather } from "../../utils/weather";
import { RequiredActionFunctionToolCall } from "openai/resources/beta/threads/runs/runs";

const FunctionCalling = () => {
  const functionCallHandler = async (call: RequiredActionFunctionToolCall) => {
    if (call?.function?.name !== "get_weather") return;
    const args = JSON.parse(call.function.arguments);
    const data = getWeather(args.location);
    
    return JSON.stringify(data);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat functionCallHandler={functionCallHandler} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunctionCalling;
