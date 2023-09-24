import React from "react";
import Selections from "./Selections";
import AccountManagement from "./AccountManagement";
// import Leaderboard from "./Leaderboard";

function Home( {user}){
    return(
        <React.Fragment>
            <hr/>
            <h2>Welcome to the bachelor franchise fantasy league </h2>
            <CustomContent user={user} />
        </React.Fragment>
    )
}

function CustomContent({user}){
    console.log(user)
    console.log("custom content accessed")
    if(!user){
        return(
            <div>
                <p>Please log in to your account</p>
                <AccountManagement />
            </div>
        );
    }
    else if(user) {
        return(
            <div>
                <Selections />
            </div>
        )
    }
}

export default Home;

//Home could be a splash page that prompts the user to log in 