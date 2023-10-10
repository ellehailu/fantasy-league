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


        console.log(weeklyGbSelections)
        // take the current user id 
        // create new variable key/value with player contestant properties
        const submitGbDraft = {
            fbID: user.uid,
            email: user.email,
            SelectionOneGb: weeklyGbSelections[0],
            SelectionTwoGb: weeklyGbSelections[1],
            SelectionThreeGb: weeklyGbSelections[2],
            SelectionFourGb: weeklyGbSelections[3],
            SelectionFiveGb: weeklyGbSelections[4],
            // PlayerGbEpisodeTotal: weeklyGbSelections.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0),
            weekNumber: episodeNumber
        }
        console.log(user.uid)
        console.log(submitGbDraft)
        console.log

        // Make a post request to API
        try {
            const response = await fetch('https://contestantsapi.onrender.com/api/playerContestant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitGbDraft),
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

    let entryDate = new Date(); 
    let episodeNumber = 0;

// Define the start date for episode 1 (September 29, 2023)
    const startDate = new Date('2023-09-29');

    // Calculate the number of milliseconds per week
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;

    // Calculate the number of weeks between the entryDate and the start date
    const weeksDifference = Math.floor((entryDate - startDate) / millisecondsPerWeek);

    // Increment the episodeNumber based on the number of weeks
    episodeNumber = Math.min(12, Math.max(2, 2 + weeksDifference));

    console.log(`Episode Number for ${entryDate.toISOString().slice(0, 10)}: ${episodeNumber}`);

    console.log(episodeNumber)

    const handleBipSubmit = async (event) => {
        event.preventDefault();
        const submitBipDraft = {
            fbID: user.uid,
            email: user.email,
            SelectionOneBip: weeklyBipSelections[0],
            SelectionTwoBip: weeklyBipSelections[1],
            SelectionThreeBip: weeklyBipSelections[2],
            SelectionFourBip: weeklyBipSelections[3],
            SelectionFiveBip: weeklyBipSelections[4],
            // PlayerBipEpisodeTotal: weeklyBipSelections.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0),
            weekNumber: episodeNumber
        }
        console.log(user.uid)
        console.log(submitBipDraft)

        try {
            const response = await fetch('https://contestantsapi.onrender.com/api/playerContestant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitBipDraft),
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
    const handleGbCheckboxChange = (event) => {
        const { value, checked } = event.target


        if (checked) {
            setWeeklyGbSelections((prevGbSelection) => [...prevGbSelection, value]);
        }

        else {
            setWeeklyGbSelections((prevGbSelection) =>
                prevGbSelection.filter((gbContestant) => gbContestant !== value)
            );
        }
    }

    const handleBipCheckboxChange = (event) => {
        const { value, checked } = event.target

        if(checked) {
            setWeeklyBipSelections((prevBipSelection) => [...prevBipSelection, value]);
        }

        else {
            setWeeklyBipSelections((prevBipSelection) => 
            prevBipSelection.filter((bipContestant) => bipContestant !== value)
            );
        }
    }


    // makes an api call to get list of contestants to display in selection form
    useEffect(() => {
        fetch(`https://contestantsapi.onrender.com/api/gb`)
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
    
        fetch(`https://contestantsapi.onrender.com/api/bip`)
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

    console.log(weeklyGbSelections)
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
                                        value={gbContestants.gbContestantId}
                                        onChange={handleGbCheckboxChange}
                                         />
                                    <h3>
                                        {gbContestants.name}: {gbContestants.age} - {gbContestants.hometown}</h3>
                                    <img className="draftPhoto" src={gbContestants.photo} />
                                </label>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <h2>Gb selections: {weeklyGbSelections}</h2>
                    <button type="submit">Save Golden Bachelor Selections</button>
                </form>
            </div>
            <form onSubmit={handleBipSubmit}>
            <div className="BipWeeklyDraft">
                    <h1>Bachelor in Paradise Selections</h1>
                    <ul>
                        {bipSelections.map((bipContestants, index) => (
                            <li key={index}>
                                <label className="label">
                                    <input
                                        type="checkbox"
                                        name="selectedContestant"
                                        value={bipContestants.bipContestantId} 
                                        onChange={handleBipCheckboxChange} />
                                    <h3>
                                        {bipContestants.name}: {bipContestants.pastAppearance}</h3>
                                    <img className="draftPhoto" src={bipContestants.photo} />
                                </label>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <h2>BIP Selections: {weeklyBipSelections}</h2>
                    <button type="submit">Save BIP selections</button>
                    </form>
        </div>
    )
}


export default WeeklyDraft;