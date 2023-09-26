import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import useUser from "../hooks/UseUser";



function AccountManagement() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  const [loggedIn, user] = useUser()

  const [error, setError] = useState(null);


  const clearInputFields = () => {
    setRegisterEmail("");
    setRegisterPassword("");
    setLogInEmail("");
    setLogInPassword("");
  };

  const register = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      clearInputFields();
      console.log(newUser);
    } catch (error) {
      setError(error.message);
    }
  };


  const logIn = async () => {
    try {
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      );
      clearInputFields();
      console.log(loggedInUser);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="accountManagement">
      {!user && <div className="userRegistration">
        <h3>Register User</h3>
        <input type="email" placeholder="Email..."
          value={registerEmail}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }} />
        <input type="password" placeholder="Password..."
          value={registerPassword} onChange={(event) => {
            setRegisterPassword(event.target.value);
          }} />
        {error && <p>{error}</p>}
        <button onClick={register}>Create user</button>
      </div>}
      {!user && <div className="userLogin">
        <h3>Login</h3>
        <input type="email" placeholder="Email..." onChange={(event) => {
          setLogInEmail(event.target.value);
        }} />
        <input type="password" placeholder="Password..." onChange={(event) => {
          setLogInPassword(event.target.value);
        }} />
        {error && <p>{error}</p>}
        <button onClick={logIn}>Login</button>
      </div>}
    </div>
  );
}

export default AccountManagement;