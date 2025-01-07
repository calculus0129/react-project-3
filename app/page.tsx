"use client";

import { useState } from "react";
import "./page.css";
import UserInput from "@/component/UserInput";
import Result from "@/component/Result";
import InputData from "@/data/InputData";

export default function Home() {
  const [inv, setInv] = useState<InputData>({
    iInv: 15000,
    aInv: 1200,
    eRet: 6,
    duration: 10,
  });
  return (
    <>
      <header id="header">
        <img
          src="/investment-calculator-logo.png"
          alt="Logo showing a money bag"
        />
        <h1>Investment Calculator</h1>
      </header>
      <section id="user-input">
        <UserInput inv={inv} setInv={setInv} />
      </section>
      <table id="result">
        <Result {...inv} />
      </table>
    </>
  );
}
