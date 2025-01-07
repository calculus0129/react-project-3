"use client";

// import Image from "next/image";
import { useState } from "react";
import "./page.css";
import {
  InvestmentResult,
  calculateInvestmentResults,
  formatter,
} from "@/util/investment";

export default function Home() {
  const [iInv, setIInv] = useState(15000);
  const [aInv, setAInv] = useState(1200);
  const [eRet, setERet] = useState(6);
  const [duration, setDuration] = useState(10);
  let totalInterest = 0;
  return (
    <>
      <header id="header">
        <img src="/investment-calculator-logo.png" alt="Logo" />
        <h1>Investment Calculator</h1>
      </header>
      <table id="user-input">
        {/* <thead></thead> */}
        <tbody>
          <tr className="input-group">
            <td>
              <label>Initial Investment</label>
              <input
                type="number"
                id="initialInvestment"
                value={iInv}
                onChange={(e) => setIInv(Number(e.target.value))}
              />
            </td>
            <td>
              <label>Annual Investment</label>
              <input
                type="number"
                id="annualInvestment"
                value={aInv}
                onChange={(e) => setAInv(Number(e.target.value))}
              />
            </td>
          </tr>
          <tr className="input-group">
            <td>
              <label>Expected Return</label>
              <input
                type="number"
                id="expReturn"
                value={eRet}
                onChange={(e) => setERet(Number(e.target.value))}
              />
            </td>
            <td>
              <label>Duration</label>
              <input
                type="number"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {calculateInvestmentResults(iInv, aInv, eRet, duration).map(
            (result: InvestmentResult) => {
              totalInterest += result.interest;
              return (
                <tr key={result.year}>
                  <td>{result.year}</td>
                  <td>{formatter.format(result.valueEndOfYear)}</td>
                  <td>{formatter.format(result.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>
                    {formatter.format(result.valueEndOfYear - totalInterest)}
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </>
  );
}
