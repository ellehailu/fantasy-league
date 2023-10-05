import React, {useState} from "react"


function EditBipContestant(props){

    const [status, setStatus] = useState(props.contestant.status)
    const [epOneScore, setEpOneScore] = useState(props.contestant.epOneScore)
    const [epTwoScore, setEpTwoScore] = useState(props.contestant.epTwoScore)
    const [epThreeScore, setEpThreeScore] = useState(props.contestant.epThreeScore)
    const [epFourScore, setEpFourScore] = useState(props.contestant.epFourScore)
    const [epFiveScore, setEpFiveScore] = useState(props.contestant.epFiveScore)
    const [epSixScore, setEpSixScore] = useState(props.contestant.epSixScore)
    const [epSevenScore, setEpSevenScore] = useState(props.contestant.epSevenScore)
    const [epEightScore, setEpEightScore] = useState(props.contestant.epEightScore)
    const [epNineScore, setEpNineScore] = useState(props.contestant.epNineScore)
    const [epTenScore, setEpTenScore] = useState(props.contestant.epTenScore)
    const [epElevenScore, setEpElevenScore] = useState(props.contestant.epElevenScore)
    const [epTwelveScore, setEpTwelveScore] = useState(props.contestant.epTwelveScore)

    

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            const editBipContestant = {
                bipContestantId: props.contestant.bipContestantId,
                name: props.contestant.name,
                status: status,
                pastAppearance: props.contestant.pastAppearance,
                photo: props.contestant.photo,
                epOneScore: epOneScore,
                epTwoScore: epTwoScore,
                epThreeScore: epThreeScore,
                epFourScore: epFourScore,
                epFiveScore: epFiveScore,
                epSixScore: epSixScore,
                epSevenScore: epSevenScore,
                epEightScore: epEightScore,
                epNineScore: epNineScore,
                epTenScore: epTenScore,
                epElevenScore: epElevenScore,
                epTwelveScore: epTwelveScore
                // do this for all other episodes and status
            };

            const response = await fetch(`https://localhost:5001/api/Bip/${props.contestant.bipContestantId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editBipContestant)
            });

            if (response.ok){
                console.log("new contestant updated")

            }
            else{
                console.error("failed to add new bip contestant")

            }
        }
        catch (error){
            console.error('Error', error)
        }
   }

   //Name, past appearance, and photo are not editable. They are set to whatever is in the database and will reset to that anytime the database is updated

    return (
    <form onSubmit={handleEdit}>
                        <input 
                        type="string" 
                        name="name"
                        placeholder="name" 
                        value={props.contestant.name}>
                        
                        </input>
                        <input 
                        type="string" 
                        name="pastAppearance"
                        placeholder="Past Appearance" 
                        value={props.contestant.pastAppearance}>
                        
                        </input>
                        <input 
                        type="string" 
                        name="photo"
                        placeholder="photo url" 
                        value={props.contestant.photo}>
                        
                        </input>
                        <div className="statusRadioButton">
                            <label>
                                <input
                                type="radio"
                                name="status"
                                value="Active"
                                checked={props.contestant.status === 'Active'}
                                onChange={(e) => setStatus(e.target.value)}/>
                                Active
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="status"
                                value="InActive"
                                checked={props.contestant.status === 'InActive'}
                                onChange={(e) => setStatus(e.target.value)}/>InActive
                            </label>
                        </div>
                        <input 
                        type="number" 
                        name="epOneScore"
                        placeholder="Episode one score" 
                        value={epOneScore}
                        onChange={(e) => setEpOneScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epTwoScore"
                        placeholder="Episode two score" 
                        value={epTwoScore}
                        onChange={(e) => setEpTwoScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epThreeScore"
                        placeholder="Episode Three score" 
                        value={epThreeScore}
                        onChange={(e) => setEpThreeScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epFourScore"
                        placeholder="Episode Four score" 
                        value={epFourScore}
                        onChange={(e) => setEpFourScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epFiveScore"
                        placeholder="Episode Five score" 
                        value={epFiveScore}
                        onChange={(e) => setEpFiveScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epSixScore"
                        placeholder="Episode Six score" 
                        value={epSixScore}
                        onChange={(e) => setEpSixScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epSevenScore"
                        placeholder="Episode Seven score" 
                        value={epSevenScore}
                        onChange={(e) => setEpSevenScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epEightScore"
                        placeholder="Episode Eight score" 
                        value={epEightScore}
                        onChange={(e) => setEpEightScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epNineScore"
                        placeholder="Episode Nine score" 
                        value={epNineScore}
                        onChange={(e) => setEpNineScore(e.target.value)}>
                        
                        </input>
                        <input 
                        type="number" 
                        name="epTenScore"
                        placeholder="Episode Ten score" 
                        value={epTenScore}
                        onChange={(e) => setEpTenScore(e.target.value)}>
                        </input>
                        <input 
                        type="number" 
                        name="epElevenScore"
                        placeholder="Episode Eleven score" 
                        value={epElevenScore}
                        onChange={(e) => setEpElevenScore(e.target.value)}>
                        
                        </input>
                        <input
                        type="number" 
                        name="epTweleveScore"
                        placeholder="Episode Tweleve score" 
                        value={epTwelveScore}
                        onChange={(e) => setEpTwelveScore(e.target.value)}>
                        
                        </input>
                        <button type="submit">Update contestant</button>
                    </form>
    )

    
}



export default EditBipContestant;