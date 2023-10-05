import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import useUser from "../hooks/UseUser";

function Header(){

const [loggedIn, user] = useUser()
//create signout function to be called when signout button is clicked in nav bar
const logOut = async () => {
    await signOut(auth);
    };


 return(
    <div>

    
        {user && <div className="header">
            <button className="headerButton" onClick={logOut}>SignOut</button>
        </div>}
        </div>
    )
}

export default Header;

//Header should have buttons for 'Previous/other seasons', 'Logout', 'Home', 'weekly draft' and 'Leaderboard'