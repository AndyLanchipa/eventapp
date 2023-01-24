import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../Types/User";

export const SignUp: SignUpProps = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  let navigate = useNavigate();

  const signUpUser: signUpUserType = (name, profilePic) => {
    setLoading(true);
    const data = { name, profileUrl: profilePic, userId: Math.random() };
    //call api to sign up user
    fetch("http://localhost:4000/api/v1/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      setLoading(true);
      const res = data.json();
      res.then((item) => {
        onSubmit(item);
      });
      navigate("/");
    });
  };

  return (
    <div className="border w-72 p-4">
      <div className="flex w-full justify-center mb-2 text-lg ">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
          Sign In
        </h1>
      </div>
      <form className="space-y-2">
        <div>
          <label>Name:</label>
          <input
            className="border rounded-md ml-2"
            type={"text"}
            onChange={(value) => setName(value.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Picture: </label>
          <input
            className="border rounded-md ml-2"
            onChange={(value) => setProfilePic(value.target.value)}
            value={profilePic}
          />
        </div>
      </form>
      <div className="flex items-center mt-5">
        <div className="inline-block bg-blue-600 m-auto p-2 rounded-xl text-white font-mono ">
          <button onClick={() => signUpUser(name, profilePic)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

type SignUpType = {
  onSubmit: (value: User) => void;
};
type SignUpProps = (props: SignUpType) => React.ReactElement;
type signUpUserType = (name: string, profilePic: string) => void;
