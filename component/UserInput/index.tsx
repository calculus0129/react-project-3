import NumInput from "./NumInput";

interface userInputProps {
  iInv: number;
  setIInv: (value: React.SetStateAction<number>) => void;
  aInv: number;
  setAInv: (value: React.SetStateAction<number>) => void;
  eRet: number;
  setERet: (value: React.SetStateAction<number>) => void;
  duration: number;
  setDuration: (value: React.SetStateAction<number>) => void;
}

const UserInput: React.FC<userInputProps> = ({
  iInv,
  setIInv,
  aInv,
  setAInv,
  eRet,
  setERet,
  duration,
  setDuration,
}) => {
  return (
    <table id="user-input">
      <tbody>
        <tr className="input-group">
          <td>
            <NumInput
              title="Initial Investment"
              state={iInv}
              setState={setIInv}
            />
          </td>
          <td>
            <NumInput
              title="Annual Investment"
              state={aInv}
              setState={setAInv}
            />
          </td>
        </tr>
        <tr className="input-group">
          <td>
            <NumInput title="Expected Return" state={eRet} setState={setERet} />
          </td>
          <td>
            <NumInput
              title="Duration"
              state={duration}
              setState={setDuration}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserInput;
