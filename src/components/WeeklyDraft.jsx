//Users can only draft once a week. Maybe the form is only open during a specific time window. 

// A form for the user to make a selection

import { useState, useEffect } from "react";
import useUser from "../hooks/UseUser";

function WeeklyDraft() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weeklyGbSelections, setWeeklyGbSelections] = useState([]);
    const [weeklyBipSelections, setWeeklyBipSelections] = useState([])
    const [gbSelections, setGbSelections] = useState([]);
    const [bipSelections, setBipSelections] = useState([])
    const [loggedIn, user] = useUser()


    // Make two forms and two separate post requests 
    const handleGbSubmit = async (event) => {
        event.preventDefault();
        // take the current user id 
        // create new variable key/value with player contestant properties
        const submitDraft = {
            fbID: user.uid,
            
            SelectionOneGb: weeklyGbSelections[0],
            SelectionTwoGb: weeklyGbSelections[1],
            SelectionThreeGb: weeklyGbSelections[2],
            SelectionFourGb: weeklyGbSelections[3],
            SelectionFiveGb: weeklyGbSelections[4],
            playerEpisodeTotal: weeklyGbSelections[0]+weeklyGbSelections[1]+weeklyGbSelections[2]+weeklyGbSelections[3]+weeklyGbSelections[4],
            weekNumber: 0
        }
        console.log(user.uid)

        // Make a post request to API
        try {
            const response = await fetch('https://localhost:5001/api/PlayerContestant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitDraft),
            });

            if (response.ok){
                console.log('Draft successfully submitted.');
            }
            else{
                console.error('failed to updated draft')
            }
        }
        catch (error){
            console.error('Error', error)
        }
    }


    // event handler to handle checked boxes
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target


        if (checked) {
            setWeeklyGbSelections((prevGbSelection) => [...prevGbSelection, value]);
            setWeeklyBipSelections((prevBipSelection) => [...prevBipSelection, value]);
        }

        else {
            setWeeklyGbSelections((prevGbSelection) =>
                prevGbSelection.filter((gbContestant) => gbContestant !== value)
            );
            setWeeklyBipSelections((prevBipSelection) => 
                prevBipSelection.filter((bipContestant) => bipContestant !== value)
            )
        }
    }

    // makes an api call to get list of contestants to display in selection form
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

                setGbSelections(jsonifiedResponse)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoaded(true)
                console.log(error)
            });
    
        fetch(`https://localhost:5001/api/Bip`)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                else {
                    return response.json()
                }
            })
            .then((jsonifiedResponse) => {
                setBipSelections(jsonifiedResponse)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoaded(true)
                console.log(error)
            })
        }, [], [])


    if (error) {
        return <h1>Error: {error}</h1>
    }
    else if (!isLoaded) {
        return <h1>...Loading...</h1>
    }

    return (
        <div className="weeklyDraft">
            <div>
            <h1>Weekly Draft</h1>
                <form onSubmit={handleGbSubmit}>
                <div className="GbWeeklyDraft">
                    <h1>Golden Bachelor Selections</h1>
                    <ul>
                        {gbSelections.map((gbContestants, index) => (
                            <li key={index}>
                                <label className="label">
                                    <input
                                        type="checkbox"
                                        name="selectedContestant"
                                        value={gbContestants.name}
                                        onChange={handleCheckboxChange} />
                                    <h3>
                                        {gbContestants.name}: {gbContestants.age} - {gbContestants.hometown}</h3>
                                    <img className="draftPhoto" src={gbContestants.photo} />
                                </label>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="BipWeeklyDraft">
                    <h1>Bachelor in Paradise Selections</h1>
                    <ul>
                        {bipSelections.map((bipContestants, index) => (
                            <li key={index}>
                                <label className="label">
                                    <input
                                        type="checkbox"
                                        name="selectedContestant"
                                        value={bipContestants.name} 
                                        onChange={handleCheckboxChange} />
                                    <h3>
                                        {bipContestants.name}: {bipContestants.pastAppearance}</h3>
                                    <img className="draftPhoto" src={bipContestants.photo} />
                                </label>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <button type="submit">Save Selections</button>
                </form>
            </div>
            <div>
                {/* Add an event listener and check which contestants are selected, then push those contestants into 'weeklyGbSelection' array */}

                {/* display selected contestants */}

                <h3>Your Golden Bachelor selections for this week:</h3>

                {/* currently displaying a list of scores instead of names because value is set to score instead of name */}
                {weeklyGbSelections.map((gbSelection, index) => (
                    <li key={index}>{gbSelection}</li>
                ))}

                <h3>Your Bachelor in Paradise selections for this week:</h3>
                {weeklyBipSelections.map((bipSelection, index) => (
                    <li key={index}>{bipSelection}</li>
                ))}
            </div>
        </div>
    )
}


export default WeeklyDraft;