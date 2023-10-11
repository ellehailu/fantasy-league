import React, {useState, useEffect} from "react";
import PropTypes from "prop-types"

function EditScore(props){
    const [selectionOneGb, setSelectionOneGb] = useState(props.player.selectionOneGb)
    const [selectionTwoGb, setSelectionTwoGb] = useState(props.player.selectionTwoGb)
    const [selectionThreeGb, setSelectionThreeGb] = useState(props.player.selectionThreeGb)
    const [selectionFourGb, setSelectionFourGb] = useState(props.player.selectionFourGb)
    const [selectionFiveGb, setSelectionFiveGb] = useState(props.player.selectionFiveGb)
    const [selectionOneBip, setSelectionOneBip] = useState(props.player.selectionOneBip)
    const [selectionTwoBip, setSelectionTwoBip] = useState(props.player.selectionTwoBip)
    const [selectionThreeBip, setSelectionThreeBip] = useState(props.player.selectionThreeBip)
    const [selectionFourBip, setSelectionFourBip] = useState(props.player.selectionFourBip)
    const [selectionFiveBip, setSelectionFiveBip] = useState(props.player.selectionFiveBip)
    const [playerGbEpisodeTotal, setPlayerGbEpisodeTotal] = useState(props.player.playerGbEpisodeTotal)
    const [playerBipEpisodeTotal, setPlayerBipEpisodeTotal] = useState(props.player.playerBipEpisodeTotal)
    const [weekNumber, setWeekNumber] = useState(props.player.weekNumber)


    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const editPlayer = {
                playerContestantID: props.player.playerContestantID,
                fbID : props.player.fbID,
                email : props.player.email,
                selectionOneGb : selectionOneGb,
                selectionTwoGb : selectionTwoGb,
                selectionThreeGb : selectionThreeGb,
                selectionFourGb : selectionFourGb,
                selectionFiveGb : selectionFiveGb,
                selectionOneBip : selectionOneBip,
                selectionTwoBip : selectionThreeBip,
                selectionThreeBip : selectionThreeBip,
                selectionFourBip : selectionFourBip,
                selectionFiveBip : selectionFiveBip,
                playerGbEpisodeTotal : playerGbEpisodeTotal,
                playerBipEpisodeTotal : playerBipEpisodeTotal,
                weekNumber : weekNumber
            };

            const response = await fetch(`https://contestantsapi.onrender.com/api/playerContestant/${props.player.playerContestantId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editPlayer)
            });

            if(response.ok){
                console.log("Player information updated")
            }
            else {
                console.log("failed to update player")
            }
        }
        catch (error){
            console.error("Error", error)
        }
    }

    return (
        <form onSubmit={handleEdit}>
            <input 
                type="string"
                name="FbID"
                placeholder="FbID"
                value={props.player.fbID}>
                </input>
            <input
                type="string"
                name="email"
                placeholder="email"
                value={props.player.email}>
                </input>
            <input
                type="number"
                name="selectionOneGb"
                placeholder="selectionOneGb"
                value={selectionOneGb}
                onChange={(e) => setSelectionOneGb(e.target.value)}>
                </input>
            <input 
                type="number"
                name="selectionTwoGb"
                placeholder="selectionTwoGb"
                value={selectionTwoGb}
                onChange={(e) => setSelectionTwoGb(e.target.value)}>
                </input>
            <input
                type="number"
                name="selectionThreeGb"
                placeholder="selectionThreeGb"
                value={selectionThreeGb}
                onChange={(e) => setSelectionThreeGb(e.target.value)}>
                </input>
            <input 
                type="number"
                name="selectionFourGb"
                placeholder="selectionFourGb"
                value={selectionFourGb}
                onChange={(e) => setSelectionFourGb(e.target.value)}>
                </input>
            <input 
                type="number"
                name="selectionFiveGb"
                placeholder="selectionFiveGb"
                value={selectionFiveGb}
                onChange={(e) => setSelectionFiveGb(e.target.value)}>
                </input>
            <input
                type="number"
                name="selectionOneBip"
                placeholder="selectionOneBip"
                value={selectionOneBip}
                onChange={(e) => setSelectionOneBip(e.target.value)}>
                </input>
            <input 
                type="number"
                name="selectionTwoBip"
                placeholder="selectionTwoBip"
                value={selectionTwoBip}
                onChange={(e) => setSelectionTwoBip(e.target.value)}>
                </input>
            <input
                type="number"
                name="selectionThreeBip"
                placeholder="selectionThreeBip"
                value={selectionThreeBip}
                onChange={(e) => setSelectionThreeBip(e.target.value)}>
                </input>
            <input 
                type="number"
                name="selectionFourBip"
                placeholder="selectionFourBip"
                value={selectionFourBip}
                onChange={(e) => setSelectionFourBip(e.target.value)}>
                </input>
            <input 
                type="number"
                name="selectionFiveBip"
                placeholder="selectionFiveBip"
                value={selectionFiveBip}
                onChange={(e) => setSelectionFiveBip(e.target.value)}>
                </input>
        </form>
    )
}

export default EditScore;