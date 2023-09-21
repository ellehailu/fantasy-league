import React from "react";
import Selections from "./Selections";
import AccountManagement from "./UserRegistration";
// import Leaderboard from "./Leaderboard";

function Home(){
    return(
        <React.Fragment>
            {/* <Leaderboard /> */}
            <hr/>
            <p>Welcome to the bachelor franchise fantasy league </p>
            <AccountManagement/>
            <Selections />
        </React.Fragment>
    )
}

export default Home;

//Home could be a splash page that prompts the user to log in 