import {
  InvestmentResult,
  calculateInvestmentResults,
  formatter,
} from "@/util/investment";
import InputData from "@/data/InputData";

const Result: React.FC<InputData> = ({ iInv, aInv, eRet, duration }) => {
  let totalInterest = 0;
  return (
    <>
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
    </>
  );
};

export default Result;
