//Users can only draft once a week. Maybe the form is only open during a specific time window. 

// A form for the user to make a selection

import React, { useState, useEffect } from "react";

function WeeklyDraft() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [gbSelections, setGbSelections] = useState([]);

    useEffect(() => {
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
    }, [])

    let weeklySelection = [];

    if (error) {
        return <h1>Error: {error}</h1>
    }
    else if (!isLoaded) {
        return <h1>...Loading...</h1>
    }

    return (
        <div>
            <div>
                <h1>Weekly Draft</h1>
                <form>
                    <h1>GB Selections</h1>
                    <ul>
                        {gbSelections.map((gbContestants, index) => (
                            <li key={index}>
                                {/* whole contestant image is clickable */}
                                {/* make style updates to hide checkbox and hide bullet point */}
                                {/* change image color to indicate the image has been selected? */}
                                <label className="label">
                                    <input
                                        type="checkbox"
                                        name="selectedContestant"
                                        value={gbContestants.name} />

                                    <h3>
                                        {gbContestants.name}: {gbContestants.age} - {gbContestants.hometown}</h3>
                                    <img className="contestantPhoto" src={gbContestants.photo} />
                                </label>
                            </li>
                        ))}
                    </ul>
                </form>
            </div>

            <div>
                {/* Add an event listener and check which contestants are seleceted, then push those contestants into 'weeklySelection' array */}
                {/* display selected contestants */}

                {weeklySelection}
            </div>

        </div>
    )
}

export default WeeklyDraft