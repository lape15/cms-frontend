import { useState } from "react";
import { InputWrapper } from "../helper/styles";

type InputProp = {
  label: string;
  info?: string;
  type: string;
  value: string | number;
  upDater: (key: string, val: string | number | boolean) => void;
  prop: string;
};

export const Input = (props: InputProp) => {
  const { label, info, type, value, upDater, prop } = props;

  const [val, setVal] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    upDater(prop, e.target.value);
  };
  return (
    <InputWrapper>
      <label>{label}</label>
      <input type={type} value={val} onChange={handleChange} name={prop} />
      {info && <p>{info}</p>}
    </InputWrapper>
  );
};
