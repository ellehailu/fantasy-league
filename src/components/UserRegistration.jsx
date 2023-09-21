// import React from "react";

function AccountManagement(){
    return(
        <div className="accountManagement">
        <div className="userRegistration">
            <h3> Register User</h3>
            <input type="email" placeholder="Email..."/>
            <input type="password" placeholder="Password..." />

            <button>Create user</button>
        </div>
        <div className="userLogin">
            <h3>Login</h3>
            <input type="email" placeholder="Email..."/>
            <input type="password" placeholder="Password..." />

            <button>Login</button>
        </div>
        <div className="userSignOut">
            <h3>User logged in</h3>
            <button>Sign out</button>
        </div>
        </div>
    )
}

export default AccountManagement;