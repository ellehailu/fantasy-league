//List all the users in descending order based on total points

import {useState, useEffect} from "react"
import useUser from "../hooks/UseUser";



function Leaderboard(){

    const[error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [leaderboard, setLeaderboard] = useState([]);
    const [loggedIn, user] = useUser()

    useEffect(() => {
        fetch(`https://localhost:5001/api/PlayerContestant`)
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
        <div>
            <ol>
                {leaderboard.map((players, index) => (
                    <li key={index}>
                        {players.fbID}: {players.playerSeasonTotal}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Leaderboard;

//Fetch the list of users and their current total score