import NumInput from "./NumInput";
import InputData from "@/data/InputData";

interface userInputProps {
  inv: InputData;
  setInv: React.Dispatch<React.SetStateAction<InputData>>;
}

const UserInput: React.FC<userInputProps> = ({ inv, setInv }) => {
  const setElement = (name: string) => {
    return (state: number) =>
      setInv(
        (prevInv: InputData): InputData => ({ ...prevInv, [name]: state }),
      );
  };
  return (
    <>
      <div className="input-group">
        <p>
          <NumInput
            title="Initial Investment"
            state={inv.iInv}
            setState={setElement("iInv")}
          />
        </p>
        <p>
          <NumInput
            title="Initial Investment"
            state={inv.aInv}
            setState={setElement("aInv")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <NumInput
            title="Expected Return"
            state={inv.eRet}
            setState={setElement("eRet")}
          />
        </p>
        <p>
          <NumInput
            title="Duration"
            state={inv.duration}
            setState={setElement("duration")}
          />
        </p>
      </div>
    </>
  );
};

export default UserInput;
