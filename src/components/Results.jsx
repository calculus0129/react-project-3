import {calculateInvestmentResults, formatter} from '../util/investment';
export default function Results({values, ...props}) {
    console.log(calculateInvestmentResults(values));
    const investment=values.initialInvestment;
    let totalInterest = 0;
    return <div {...props}>
        <table>
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
                {calculateInvestmentResults(values).map((obj)=>{
                    totalInterest += obj.interest;
                    return <tr key={obj.year}>
                        <td> {obj.year}</td>
                        <td> {formatter.format(obj.valueEndOfYear)}</td>
                        <td> {formatter.format(obj.interest)}</td>
                        <td> {formatter.format(totalInterest)}</td>
                        <td> {investment+obj.year*obj.annualInvestment}</td>
                    </tr>;
                })}
            </tbody>
        </table>
    </div>;
    
}