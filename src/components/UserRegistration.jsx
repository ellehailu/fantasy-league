// import React from "react";
import { useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from "./../firebaseConfig"

function AccountManagement(){
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [logInEmail, setLogInEmail] = useState ("")
    const [logInPassword, setLogInPassword] = useState("")

    //grabs the current user that is logged in
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        }
        catch(error) {
            console.log(error.message)
        }
    };

    const logIn = async () => {
        
    };

    const logOut = async () => {
        await signOut(auth)
    };


    return(
        <div className="accountManagement">
            <div className="userRegistration">
                <h3> Register User</h3>
                <input type="email" placeholder="Email..." onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}/>
                <input type="password" placeholder="Password..." onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}/>

                <button onClick={register}>Create user</button>
            </div>
            <div className="userLogin">
                <h3>Login</h3>
                <input type="email" placeholder="Email..." onChange={(event) => {
                    setLogInEmail(event.target.value);
                }}/>
                <input type="password" placeholder="Password..." onChange={(event) => {
                    setLogInPassword(event.target.value);
                }}/>

                <button>Login</button>
            </div>
            <div className="userSignOut">
                <h3>User logged in:</h3>
                {user?.email}
                <button onClick={logOut}>Sign out</button>
            </div>
        </div>
    )
}

export default AccountManagement;