//List all the users in descending order based on total points

import React from "react"
import useUser from "../hooks/UseUser";


function Leaderboard(){

    // const [loggedIn, user] = useUser()

    return (
        <React.Fragment>
            <h1>Leaderboard</h1>
            <h3>Top Scores: </h3>
            {/* Loop through list of users in joint table and display names based on total scores (in descending order) */}
            <h3>Your score: </h3>
            {/* make call to joint table to get total score for player */}
        </React.Fragment>
    )
}

export default Leaderboard;

//Fetch the list of users and their current total score