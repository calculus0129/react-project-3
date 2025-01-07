interface NumInputProps {
  title: string;
  state: number;
  setState: (state: number) => void;
  float?: boolean;
}

const NumInput: React.FC<NumInputProps> = ({
  title,
  state,
  setState,
  float,
}) => {
  const intParser = (value: string) => {
    const ret = parseInt(value);
    return isNaN(ret) ? 0 : ret;
  };
  const floatParser = (value: string) => {
    const ret = Number(value);
    return isNaN(ret) ? 0 : ret;
  };
  return (
    <>
      <label>{title}</label>
      <input
        type="number"
        value={state}
        onChange={(e) => {
          const floatVal = floatParser(e.target.value.replace(",", ".")); // replace comma with dot.
          const intVal = intParser(e.target.value);
          console.log(float ? floatVal : (intVal ?? intVal));

          setState(float ? floatVal : (intVal ?? intVal));
        }}
        required
      />
    </>
  );
};
export default NumInput;
