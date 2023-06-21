import { useState } from "react";
import { auth, googleProvider } from "../config/fierbase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };
  return (
    <>
      <div>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}> Sign In</button>
        <button onClick={signInWithGoogle}> Sign In Google</button>
      </div>
    </>
  );
};
