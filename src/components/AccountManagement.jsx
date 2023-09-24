import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../firebaseConfig";


function AccountManagement() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  // Grabs the current user that is logged in
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup the subscription when the component unmounts
  }, []);

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


  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="accountManagement">
      {!user &&<div className="userRegistration">
      <h3>Register User</h3>
        <input type="email" placeholder="Email..." 
        value={registerEmail}
        onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}/>
        <input type="password" placeholder="Password..."
        value={registerPassword} onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}/>
        {error && <p>{error}</p>}
        <button onClick={register}>Create user</button>
      </div>}
      {!user &&<div className="userLogin">
        <h3>Login</h3>
        <input type="email" placeholder="Email..." onChange={(event) => {
                    setLogInEmail(event.target.value);
                }}/>
                <input type="password" placeholder="Password..." onChange={(event) => {
                    setLogInPassword(event.target.value);
                }}/>
        {error && <p>{error}</p>}
        <button onClick={logIn}>Login</button>
      </div>}
      {user && <div className="userSignOut">
        <h3>User logged in:</h3>
        {user?.email}
        {error && <p>{error}</p>}
        <button onClick={logOut}>Sign out</button>
      </div>}
    </div>
  );
}

export default AccountManagement;