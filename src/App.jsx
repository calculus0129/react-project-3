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
      console.log(prevValues);
      return prevValues;
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
              index={0} />
            </td>
            <td>
              <InputText title='Annual Investment'
              handleValue={onChangeValue}
              index={1} />
            </td>
          </tr>
          <tr>
            <td>
              <InputText title='Expected Return'
              handleValue={onChangeValue}
              index={2} />
            </td>
            <td>
              <InputText title='Duration'
              handleValue={onChangeValue}
              index={3}
              type='int' />
            </td>
          </tr>
        </tbody>
      </table>
    </InputBox>
    <Results></Results>
  </>;
}

export default App
