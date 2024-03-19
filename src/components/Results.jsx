import {calculateInvestmentResults, formatter} from '../util/investment';
export default function Results({values}) {
    console.log(calculateInvestmentResults(values));
}