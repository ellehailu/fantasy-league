import React, { useState, useEffect } from "react";


function AdminUI() {



    // handle gbEdit submit (To update weekly scores) [HttpPut]

    // handle bipEdit submit (To update weekly scores) [HttpPut]

    // handle bipPost submit (Add newly added contestants) [HttpPost]

    // Get new weekly selections from playerContestant table [HttpGet]

    // Edit Player contestant table with episode totals [HttpPost]

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
            <h1>BIP Contestants</h1>
                <div className="contestantCard">
                <ul>
                {bipSelections.map((bipContestants, index) =>
                <li key={index}>
                <h3>{bipContestants.name}</h3>
                </li>)}
            </ul>
        </div>


        <h1>GB Contestants</h1>
        <div className="contestantCard">
            <ul>
                {gbSelections.map((gbContestants, index) =>
                    <li key={index}>
                        <h3>{gbContestants.name}</h3>
            </li>)}
            </ul>
        </div>
        </div>
        )
    }
}

export default AdminUI;