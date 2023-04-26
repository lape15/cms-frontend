import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { Input } from "../components/input";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { addToStorage } from "../helper/helper";
import { LoginWrapper, Form, Button, LinkWrapper } from "../helper/styles";

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
      <Form onSubmit={handleAdminLogin} id="form">
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
      <LinkWrapper>
        Don&apos;t have an account? &nbsp;<Link href="/">Sign up</Link>
      </LinkWrapper>
    </LoginWrapper>
  );
};

export default Login;
