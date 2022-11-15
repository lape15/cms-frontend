import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Input } from "./components/input";
import React, { useState, FormEventHandler } from "react";

const LoginWrapper = styled.section`
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

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  width: 400px;
  margin: 10px auto;
  @screen (max-width:512px) {
    width: 100%;
  }
`;

const Button = styled.button`
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

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const upDateDetails = (key: string, value: string | number | boolean) => {
    setLogin({
      ...login,
      [key]: value,
    });
  };

  const handleAmdminLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({ login });
  };

  return (
    <LoginWrapper>
      <h3>Sign in with your email</h3>
      <Form onSubmit={handleAmdminLogin}>
        <Input
          value={login.email}
          type="email"
          label="Email address"
          upDater={upDateDetails}
          prop="email"
        />
        <Input
          value={login.password}
          type="password"
          label="Password"
          upDater={upDateDetails}
          prop="password"
        />
        <Button type="submit">Sign in</Button>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
