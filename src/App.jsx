import Header from "./components/Header";
import InputBox from "./components/InputBox";
import InputText from "./components/InputText";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [values, changeValues] = useState([]);
  function onChangeValue(index, value) {
    changeValues((prevValues) => {
      prevValues[index] = value;
      return prevValues;
    });
  }

  return <>
    <Header id='header' />
    <InputBox id='user-input' className='input-group'>
      <table>
        <tbody>
          <tr>
            <td><InputText title='Initial Investment' /></td>
            <td><InputText title='Annual Investment' /></td>
          </tr>
          <tr>
            <td><InputText title='Expected Return' /></td>
            <td><InputText title='Duration' /></td>
          </tr>
        </tbody>
      </table>
    </InputBox>
    <Results></Results>
  </>;
}

export default App
