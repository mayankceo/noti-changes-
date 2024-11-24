import React, { useState } from "react";
import { auth } from "../../firebase/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      // Create a new user with email and password
      await auth.createUserWithEmailAndPassword(email, password);

      // Send email verification
      const user = auth.currentUser;
      await user.sendEmailVerification();

      setMessage("Verification email sent! Please check your inbox.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
};

export default Signup;
