import Head from "next/head";
import Image from "next/image";
import { addToStorage } from "../helper/helper";
import axios from "axios";
import { useRouter } from "next/router";
import { Input } from "../components/input";
import Link from "next/link";
import React, { useState } from "react";
import { LoginWrapper, Form, Button, LinkWrapper } from "../helper/styles";

const userObj = {
  firstName: "",
  email: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};
export default function Home() {
  const [user, setUser] = useState(userObj);
  const [error, setError] = useState("");
  const router = useRouter();
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
      setError("Please fill in input fields!");
      return;
    }
    try {
      const data = await axios.post(
        `${process.env.API_END_POINT!}signup`,
        user
      );
      const userData = data.data.data;
      const token = data.data.token;
      addToStorage(userData, token);
      setError("");
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Error creating user!");
    }
  };

  return (
    <LoginWrapper onSubmit={handleUserSignup} className="form">
      <h2>Sign Up to use as Admin</h2>
      <Form>
        {error && (
          <p
            className="err"
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
        )}
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
        <Button type="submit" className="btn">
          Join
        </Button>
      </Form>
      <LinkWrapper>
        Already have an account? &nbsp; <Link href="/login">Login</Link>
      </LinkWrapper>
    </LoginWrapper>
  );
}
