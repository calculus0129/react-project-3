import {calculateInvestmentResults, formatter} from '../util/investment';
export default function Results({values}) {
    console.log(calculateInvestmentResults({
        initialInvestment: values[0],
        annualInvestment: values[1],
        expectedReturn: values[2],
        duration: values[3],
      }));
}