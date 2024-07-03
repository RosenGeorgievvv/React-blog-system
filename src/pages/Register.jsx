import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import addAvatar from "../assets/addAvatar.png";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[1];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="main-form">
      <div className="main-wrapper">
        <span className="header">F2F Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="avatar" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong...</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>   
  );
};

export default Register;
