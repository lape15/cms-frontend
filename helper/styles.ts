import styled from "styled-components";

export const LoginWrapper = styled.section`
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
  width: 100%;
  padding: 120px 80px;
  align-items: center;

  & h3 {
    margin-block-start: 20px;
  }
  @screen (max-width:512px) {
    padding: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  width: 400px;
  margin: 10px auto;
  @screen (max-width:512px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 20px;
  color: white;
  font-size: 14px;
  background: #10ab51;
  margin-block-start: 20px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
`;

export const InputWrapper = styled.div`
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

export const LinkWrapper = styled.p`
  color: white;
  & a {
    color: #10ab51;
  }
  font-size: 12px;
`;

export const DashWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #181c28;
  color: white;
  padding: 20px;
`;
export const MenuWrapper = styled.div`
  flex: 1;
  background: #141821;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
  padding: 20px 0;
`;

export const Item = styled.button`
  width: 100%;
  color: #2d3342;
  border: none;
  background: none;
  padding: 10px 0;
  position: relative;
  transition: all 0.3s ease;
  & span {
    font-size: 16px;
  }
  &.active {
    color: white;
  }
  cursor: pointer;
  &:hover {
    color: white;
    transform: scale(1.1);
  }
`;

export const View = styled.div`
  flex: 4;
`;
