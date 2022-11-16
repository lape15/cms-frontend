import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import axios from "axios";
import { Input } from "./components/input";
import Link from "next/link";
import React, { useState } from "react";

const LoginWrapper = styled.section`
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
  width: 100%;
  padding: 80px;
  align-items: center;

  & h3 {
    margin-block-start: 10px;
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

const userObj = {
  firstName: "",
  email: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};
export default function Home() {
  const [user, setUser] = useState(userObj);

  const upDateDetails = (key: string, value: string | number | boolean) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleUserSignup = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const errors = [];

    for (let key in user) {
      if (!user[key as keyof typeof user]) errors.push(key);
    }
    if (errors.length !== 0) {
      alert("Please fill in input fields!");
      return;
    }
    try {
      const data = await axios.post(
        `${process.env.API_END_POINT!}signup`,
        user
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginWrapper onSubmit={handleUserSignup}>
      <h2>Sign Up to use as Admin</h2>
      <Form>
        <Input
          value={user.firstName}
          type="text"
          label="First name"
          upDater={upDateDetails}
          prop="firstName"
        />
        <Input
          value={user.lastName}
          type="text"
          label="Last name"
          upDater={upDateDetails}
          prop="lastName"
        />
        <Input
          value={user.email}
          type="email"
          label="Email address"
          upDater={upDateDetails}
          prop="email"
        />
        <Input
          value={user.password}
          type="password"
          label="Password"
          upDater={upDateDetails}
          prop="password"
        />
        <Input
          value={user.confirmPassword}
          type="password"
          label="Confirm password"
          upDater={upDateDetails}
          prop="confirmPassword"
        />
        <Button type="submit">Join</Button>
      </Form>
      <p>
        Already have an account &nbsp; <Link href="/login">Login</Link>
      </p>
    </LoginWrapper>
  );
}
