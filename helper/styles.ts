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

export const ColumnWrap = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
`;
export const Column = styled.div`
  flex: 1;
  font-size: 12px;
  color: #313646;
`;

export const DashView = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px 20px;
  height: 100%;
`;

export const PostItem = styled.div`
  width: 100%;
  padding: 5px 15px;
  background: #242937;
  display: flex;
  gap: 10px;
  align-items: center;
  & .row {
    flex: 1;
    font-size: 14px;
    color: #676d7b;
    font-weight: 400;
  }
  & .row.actn {
    display: flex;
    justify-content: flex-end;
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const NavHead = styled.nav`
  display: flex;
  gap: 10px;
  color: white;
  padding: 20px;
  & button {
    background: transparent;
    border: none;
    font-size: 14px;
    color: #6f7485;
  }
  & button.active {
    color: white;
    position: relative;
  }
  & button.active::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10%;
    background: #22c4f7;
    left: 0;
    bottom: -15px;
  }
`;

export const CreateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
  padding: 20px 40px;
  & h2 {
    font-size: 18px;
    color: white;
  }
  & .editor {
    flex: 2;
    height: 80%;
    .quill {
      height: 600px;
      overflow-y: auto;
      /* .ql-toolbar.ql-snow {
        border: none;
      } */
      .ql-container.ql-snow {
        border: none;
      }
    }
  }
`;
