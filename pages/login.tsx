import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import axios from "axios";
import { Input } from "./components/input";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { addToStorage } from "./helper/helper";

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
  const router = useRouter();

  const upDateDetails = (key: string, value: string | number | boolean) => {
    setLogin({
      ...login,
      [key]: value,
    });
  };

  const handleAdminLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("Please enter email and password!");
      return;
    }
    try {
      const data = await axios.post(
        `${process.env.API_END_POINT!}login`,
        login
      );

      const user = data.data.data;
      const token = data.data.token;
      addToStorage(user, token);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginWrapper>
      <h3>Sign in with your email</h3>
      <Form onSubmit={handleAdminLogin}>
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
      <p>
        Don&apos;t have an account &nbsp;<Link href="/login">Sign up</Link>
      </p>
    </LoginWrapper>
  );
};

export default Login;
