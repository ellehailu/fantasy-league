// display that weeks selected drafts by the user

// connect to weekly draft button in the header

import React, { useState, useEffect } from "react";

// Have two selections --one for BIP and one for GB

function Seasons() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bipSelections, setBipSelections] = useState([]);
    const [gbSelections, setGbSelections] = useState([]);


    useEffect(() => {
        fetch(`https://localhost:5001/api/Bip`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                else {
                    return response.json()
                }
            })
            .then((jsonifiedResponse) => {
                console.log(jsonifiedResponse)
                setBipSelections(jsonifiedResponse)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoaded(true)
                console.log(error)
            });
        fetch(`https://localhost:5001/api/Gb`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                else {
                    return response.json()
                }
            })
            .then((jsonifiedResponse) => {
                console.log(jsonifiedResponse)
                setGbSelections(jsonifiedResponse)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoaded(true)
                console.log(error)
            });
    }, [], [])


    if (error) {
        return <h1>Error: {error}</h1>
    }
    else if (!isLoaded) {
        return <h1>...Loading...</h1>
    }
    else {

        // display name on a flipable card that shows the bio and photo when user hovers over the name
        console.log("reached 'else' branch")
        return (
            <div className="cardContainer">
                <button>Bachelor in Paradise</button>
                <button>Golden Bachelor</button>
                <h1>BIP Selections</h1>
                <div className="contestantCard">
                <ul>
                    {bipSelections.map((bipContestants, index) =>
                        <li key={index}>
                            <div className="card">
                                <div className="card-inner">
                                    <div className="card-front">
                                    <img className="contestantPhoto" src={bipContestants.photo}></img>
                                    </div>
                           <div className="card-back">
                            <h3>{bipContestants.name}</h3>
                            <p>{bipContestants.pastAppearance}</p>
                            </div>
                            </div>
                            </div>
                        </li>)}
                </ul>
                </div>


                <h1>GB Selections</h1>
                <div className="contestantCard">
                    <ul>
                        {gbSelections.map((gbContestants, index) =>
                            <li key={index}>
                                <div className="card">
                                    <div className="card-inner">
                                        <div className="card-front">
                                        <img className="contestantPhoto" src={gbContestants.photo}></img>
                                        </div>
                                        <div className="card-back">
                                <h3>{gbContestants.name}: {gbContestants.age} - {gbContestants.hometown}</h3>
                                <p>{gbContestants.bio}</p>
                                </div>
                                </div>
                                </div>
                            </li>)}
                        </ul>
                    </div>
            </div>
        )
    }
}

export default Seasons;


// make api call to retrieve the available cast members for the selected season.
// could be displayed in a drop down menu
