import React from "react";

function Header(){
    return(
        <React.Fragment>
            <h2>Header: Fantasy League</h2>
            <button className="headerButton">Home</button>
            <button className="headerButton">Other Seasons</button>
            <button className="headerButton">Leaderboard</button>
            <button className="headerButton">Weekly draft</button>
            <button className="headerButton">Logout</button>
        </React.Fragment>
    )
}

export default Header;

//Header should have buttons for 'Previous/other seasons', 'Logout', 'Home', 'weekly draft' and 'Leaderboard'