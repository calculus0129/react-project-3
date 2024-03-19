import Header from "./components/Header";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Results from "./components/Results";
import { useState } from "react";
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [values, changeValues] = useState({});
  function onChangeValue(name, value) {
    changeValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  return <>
    <Header id='header' />
    <InputBox id='user-input' className='input-group'>
      <table>
        <tbody>
          <tr>
            <td>
              <InputText title='Initial Investment'
              handleValue={onChangeValue}
              name='initialInvestment' />
            </td>
            <td>
              <InputText title='Annual Investment'
              handleValue={onChangeValue}
              name='annualInvestment' />
            </td>
          </tr>
          <tr>
            <td>
              <InputText title='Expected Return'
              handleValue={onChangeValue}
              name='expectedReturn' />
            </td>
            <td>
              <InputText title='Duration'
              handleValue={onChangeValue}
              name='duration'
              type='int' />
            </td>
          </tr>
        </tbody>
      </table>
    </InputBox>

    <Results values={values}></Results>
  </>;
}

export default App
