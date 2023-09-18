"use client";
import React, { useState } from "react";
import Image from "next/image";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <div className="flex h-screen flex-col justify-center items-center border-2">
      <div className=" w-3/12 ">
      <div className=" flex self-center justify-center items-center mb-4">
          <Image src={"/kabsa.jpg"} width={250} height={80} />
        </div>


        <h3 className=" text-center font-bold text-sm ">
          Please Enter your login information
        </h3>

        <div className="flex flex-col justify-start mt-3">
          <label className="text-sm font-semibold">E-mail</label>
          <input
            type="text"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control border-[0.5px] text-sm rounded p-1"
            placeholder="Enter email address"
          />
        </div>
        <div className="flex flex-col justify-start mt-3">
          <label className="text-sm font-semibold">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control border-[0.5px]  text-sm rounded p-1"
            placeholder="************"
          />
        </div>
        <button
          type="submit"
          className="p-[6px] text-white text-sm font-semibold bg-blue-900 w-full rounded mt-3 "
          onClick={() => handleLogin()}
        >
          To Login
        </button>
      </div>
    </div>
  );
}

export default Login;
