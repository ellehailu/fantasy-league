//Users can only draft once a week. Maybe the form is only open during a specific time window. 

// A form for the user to make a selection

import { useState, useEffect } from "react";
import useUser from "../hooks/UseUser";

function WeeklyDraft() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weeklyGbSelections, setWeeklyGbSelections] = useState([]);
    const [gbSelections, setGbSelections] = useState([]);
    const [loggedIn, user] = useUser()

    const handleSubmit = async (event) => {
        event.preventDefault();
        // take the current user id 
        // create new variable key/value with player contestant properties
        const submitDraft = {
            fbID: user.uid,
            
            selectionOneGb: weeklyGbSelections[0],
            selectionTwoGb: weeklyGbSelections[1],
            selectionThreeGb: weeklyGbSelections[2],
            selectionFourGb: weeklyGbSelections[3],
            selectionFiveGb: weeklyGbSelections[4],
            playerSeasonTotal: 0,
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
            setWeeklyGbSelections((prevSelection) => [...prevSelection, value]);
        }

        else {
            setWeeklyGbSelections((prevSelection) =>
                prevSelection.filter((contestant) => contestant !== value)
            );
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
    }, [])



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
                <form onSubmit={handleSubmit}>
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
                                        value={gbContestants.seasonTotal}
                                        onChange={handleCheckboxChange} />

                                    <h3>
                                        {gbContestants.name}: {gbContestants.age} - {gbContestants.hometown}  | season total:{gbContestants.seasonTotal}</h3>
                                    <img className="draftPhoto" src={gbContestants.photo} />
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button type="submit">Save Selections</button>
                </form>
            </div>
            <div>
                {/* Add an event listener and check which contestants are selected, then push those contestants into 'weeklyGbSelection' array */}

                {/* display selected contestants */}

                <h3>Your selection for this week:</h3>

                {/* currently displaying a list of scores instead of names because value is set to score instead of name */}
                {weeklyGbSelections.map((selection, index) => (
                    <li key={index}>{selection}</li>
                ))}
            </div>
        </div>
    )
}


export default WeeklyDraft;