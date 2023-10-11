import { useEffect, useState } from "react"; 
import EditScore from "./EditScore";


function DisplayScore() {
    const [error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[playerSelection, setPlayerSelection] = useState({
        fbID: "",
        email: "",
        selectionOneGb: 0,
        selectionTwoGb: 0,
        selectionThreeGb: 0,
        selectionFourGb: 0,
        selelctionFiveGb: 0,
        selectionOneBip: 0,
        selectionTwoBip: 0,
        selectionThreeBip: 0,
        selectionFourBip: 0,
        selectionFiveBip: 0,
        playerBIPEpisodeTotal: 0,
        playerGbEpisodeTotal: 0,
        weekNumber: 0
    })

    // const handlePlayerChange = (e) => {
    //     const { name, value } = e.target;
    //     setPlayerSelection({...playerSelection, [name]: value})
    // };

    useEffect(() => {
        fetch("https://contestantsapi.onrender.com/api/playerContestant")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`${response.status}: ${response.statusText}`);
            } else {
              return response.json();
            }
          })
          .then((jsonifiedResponse) => {
            setPlayerSelection(jsonifiedResponse); // Set the parsed response in the state
            setIsLoaded(true);
          })
          .catch((error) => {
            setError(error.message);
            setIsLoaded(true);
            console.error(error);
          });
      }, []);


    if(error){
        return <h1>Error: {error}</h1>
    }
    else if(!isLoaded){
        return <h1>...Loading...</h1>
    }
    else {
        return (
            <div>
                <ul>
                    {playerSelection.map((playersContestants, index) =>
                    <li key={index}>
                        <h3>{playersContestants.email}</h3>
                        <EditScore player={playersContestants} />
                        <button>Delete</button>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default DisplayScore;
