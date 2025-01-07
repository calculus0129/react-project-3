interface NumInputProps {
  title: string;
  state: number;
  setState: (state: number) => void;
}

const NumInput: React.FC<NumInputProps> = ({ title, state, setState }) => {
  return (
    <>
      <label>{title}</label>
      <input
        type="number"
        value={state}
        onChange={(e) => setState(Number(e.target.value))}
        required
      />
    </>
  );
};
export default NumInput;
