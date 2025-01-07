"use client";

import { useState } from "react";
import "./page.css";
import UserInput from "@/component/UserInput";
import Result from "@/component/Result";

export default function Home() {
  const [iInv, setIInv] = useState(15000);
  const [aInv, setAInv] = useState(1200);
  const [eRet, setERet] = useState(6);
  const [duration, setDuration] = useState(10);
  return (
    <>
      <header id="header">
        <img
          src="/investment-calculator-logo.png"
          alt="Logo showing a money bag"
        />
        <h1>Investment Calculator</h1>
      </header>
      <UserInput
        iInv={iInv}
        aInv={aInv}
        eRet={eRet}
        duration={duration}
        setIInv={setIInv}
        setAInv={setAInv}
        setERet={setERet}
        setDuration={setDuration}
      />
      <Result iInv={iInv} aInv={aInv} eRet={eRet} duration={duration} />
    </>
  );
}
