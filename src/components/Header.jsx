import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Header(){

//create signout function to be called when signout button is clicked in nav bar
const logOut = async () => {
    await signOut(auth);
    };

let navBar = null;
 return(
        <React.Fragment>
            <button className="headerButton" href="/">Home</button>
             <button className="headerButton">
                 Other Seasons</button> 
            <button className="headerButton">Leaderboard</button>
            <button className="headerButton">Weekly draft</button>
            <button className="headerButton" onClick={logOut}>SignOut</button>
            {console.log("user logged out")}

        </React.Fragment>
    )
}

export default Header;

//Header should have buttons for 'Previous/other seasons', 'Logout', 'Home', 'weekly draft' and 'Leaderboard'