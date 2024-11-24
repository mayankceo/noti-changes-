import React, { useState } from "react";
import firebase from "../../firebase/firebase"; // Adjust the path to your Firebase config

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    verificationCode: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // Generate a random verification code
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit random code
  };

  // Send email with verification code
  const sendVerificationEmail = async () => {
    const { email } = inputs;
    const code = generateVerificationCode();
    setGeneratedCode(code);

    // Use Firebase to send email
    try {
      // Example: Use Firebase Functions or an email service to send the email
      await firebase.auth().sendSignInLinkToEmail(email, {
        url: "http://your-app.com/verify", // Adjust to your app's verification URL
        handleCodeInApp: true,
      });
      setVerificationSent(true);
      setSuccess("Verification email sent! Check your inbox.");
    } catch (err) {
      setError("Failed to send verification email. Try again.");
      console.error(err);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, verificationCode } = inputs;

    if (!verificationSent) {
      setError("Please send the verification code to your email first.");
      return;
    }

    if (verificationCode !== generatedCode) {
      setError("Invalid verification code.");
      return;
    }

    try {
      // Create user in Firebase Authentication
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      setSuccess("Signup successful!");
      setError("");
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleInputChange}
          required
        />
        {!verificationSent ? (
          <button type="button" onClick={sendVerificationEmail}>
            Send Verification Code
          </button>
        ) : (
          <>
            <input
              type="text"
              name="verificationCode"
              placeholder="Enter Verification Code"
              value={inputs.verificationCode}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Sign Up</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Signup;
