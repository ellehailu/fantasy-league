import { useState } from "react"
import PropTypes from "prop-types"

function EditGbContestant(props) {

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

    EditGbContestant.propTypes = {
        contestant: PropTypes.shape({
            gbContestantId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            status: PropTypes.oneOf(['Active', 'InActive']).isRequired,
            hometown: PropTypes.string.isRequired,
            occupation: PropTypes.string.isRequired,
            bio: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
            epOneScore: PropTypes.number.isRequired,
            epTwoScore: PropTypes.number.isRequired,
            epThreeScore: PropTypes.number.isRequired,
            epFourScore: PropTypes.number.isRequired,
            epFiveScore: PropTypes.number.isRequired,
            epSixScore: PropTypes.number.isRequired,
            epSevenScore: PropTypes.number.isRequired,
            epEightScore: PropTypes.number.isRequired,
            epNineScore: PropTypes.number.isRequired,
            epTenScore: PropTypes.number.isRequired,
            epElevenScore: PropTypes.number.isRequired,
            epTwelveScore: PropTypes.number.isRequired,
          }).isRequired,
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            const editGbContestant = {
            gbContestantId: props.contestant.gbContestantId,
            name: props.contestant.name,
            age: props.contestant.age,
            status: status,
            hometown: props.contestant.hometown,
            occupation: props.contestant.occupation,
            bio: props.contestant.bio,
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
            epTwelveScore: epTwelveScore,
            };

            const response = await fetch(`https://localhost:5001/api/Gb/${props.contestant.gbContestantId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editGbContestant)
            });

            if (response.ok) {
                console.log("GB contestant updated")
            }
            else {
                console.log("failed to update GB contestant ")
            }
        }
        catch (error){
            console.error('Error', error)
        }
    }

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
                        name="hometown"
                        placeholder="hometown" 
                        value={props.contestant.hometown}>
                        </input>
                        <input 
                        type="string" 
                        name="occupation"
                        placeholder="occupation" 
                        value={props.contestant.occupation}>
                        </input>
                        <input 
                        type="number" 
                        name="age"
                        placeholder="age" 
                        value={props.contestant.age}>
                        </input>
                        <input 
                        type="string" 
                        name="bio"
                        placeholder="bio" 
                        value={props.contestant.bio}>
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
                                onChange={(e) => setStatus(e.target.value)}/>Active
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

export default EditGbContestant;