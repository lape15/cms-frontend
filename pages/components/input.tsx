import styled from "styled-components";
import { useState } from "react";

const InputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  margin-block-start: 20px;
  margin-end-start: 20px;

  & label {
    color: #ccc;
    font-size: 14px;
  }
  & input {
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    margin-top: 5px;
  }
`;
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
      <input type={type} value={val} onChange={handleChange} />
      {info && <p>{info}</p>}
    </InputWrapper>
  );
};
