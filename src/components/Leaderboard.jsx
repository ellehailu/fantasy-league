//List all the users in descending order based on total points

import {useState, useEffect} from "react"




function Leaderboard(){

    const[error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch(`https://contestantsapi.onrender.com/api/playerContestant`)
        .then(response => {
            if(!response.ok){
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            else {
                return response.json()
            }
        })
        .then((jsonifiedResponse) => {
            setLeaderboard(jsonifiedResponse);
            setIsLoaded(true);
        })
        .catch((error) => {
            setError(error.message)
            setIsLoaded(true)
            console.log(error)
        });
    }, [])

    if (error){
        return <h1>Error: {error}</h1>
    }
    else if(!isLoaded) {
        return<h1>...Loading...</h1>
    }
    return (
        <div className="LeaderboardContainer">
            <div className="BIPLeaderboardContainer">
            <ol>
                <h2>Bachelor in Paradise Leaderboard</h2>
                {leaderboard.map((players, index) => (
                    <li key={index}>
                        {players. email}
                    </li>
                ))}
            </ol>
            </div>
            <div className="GBLeaderboardContainer">
            <ol>
                <h2>Golden Bachelor Leaderboard</h2>
                {leaderboard.map((players, index) => (
                    <li key={index}>
                        
                        {players.email}
                    </li>
                ))}
            </ol>
            </div>
        </div>

    )
}

export default Leaderboard;
