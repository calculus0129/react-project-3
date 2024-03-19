import figure from '../assets/investment-calculator-logo.png';
export default function Header({...props}) {
    return <h1 {...props}>
      <p><img src={figure}/></p>
      React Investment Calculator
    </h1>;
}