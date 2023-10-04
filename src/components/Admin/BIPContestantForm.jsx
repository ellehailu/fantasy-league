
import { useEffect, useState } from "react";


function BIPContestantForm(){

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bipSelections, setBipSelections] = useState([]);
    const [bipContestantInfo, setBipContestantInfo] = useState({
        name:'',
        pastAppearance:'',
        photo: '',
        status: '',
        EpOneScore: 0,
        EpTwoScore: 0,
        EpThreeScore: 0,
        EpFourScore: 0,
        EpFiveScore: 0,
        EpSixScore: 0,
        EpSevenScore: 0,
        EpEightScore: 0,
        EpNineScore: 0,
        EpTenScore: 0,
        EpElevenScore: 0,
        EpTwelveScore: 0
    })

    const handleBipChange = (e) => {
        const { name, value } = e.target;
        setBipContestantInfo({...bipContestantInfo, [name]: value })
    };

    const handleBipStatusChange = (e) => {
        setBipContestantInfo({...bipContestantInfo, status: e.target.value });
    };

    // Make POST request to add new BIP contestant
   const handleNewBipSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:5001/api/Bip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bipContestantInfo)
            });

            if (response.ok){
                console.log("new contestant successfully added")

                return<h3>BIP contestant successful added</h3>
            }
            else{
                console.error("failed to add new bip contestant")
                return<h3>Failed to add new BIP contestant</h3>
            }
        }
        catch (error){
            console.error('Error', error)
        }
   }

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

    }, [])


    if (error) {
        return <h1>Error: {error}</h1>
    }
    else if (!isLoaded) {
        return <h1>...Loading...</h1>
    }
    else {

       
    console.log("reached 'else' branch")
        return (
        <div>
            <div>
                <h1>BIP Contestants</h1>
                <h3>Add new Bip Contestant</h3>
                <form onSubmit={handleNewBipSubmit}>
                    <input 
                    type="string" 
                    name="name"
                    placeholder="name" 
                    value={bipContestantInfo.name}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="string" 
                    name="pastAppearance"
                    placeholder="Past Appearance" 
                    value={bipContestantInfo.pastAppearance}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="string" 
                    name="photo"
                    placeholder="photo url" 
                    value={bipContestantInfo.photo}
                    onChange={handleBipChange}>
                    </input>
                    <div className="statusRadioButton">
                        <label>
                            <input
                            type="radio"
                            name="status"
                            value="Active"
                            checked={bipContestantInfo.status === 'Active'}
                            onChange={handleBipStatusChange}/>Active
                        </label>
                        <label>
                            <input
                            type="radio"
                            name="status"
                            value="InActive"
                            checked={bipContestantInfo.status === 'Active'}
                            onChange={handleBipStatusChange}/>InActive
                        </label>
                    </div>
                    <input 
                    type="number" 
                    name="epOneScore"
                    placeholder="Episode one score" 
                    value={bipContestantInfo.epOneScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epTwoScore"
                    placeholder="Episode two score" 
                    value={bipContestantInfo.epTwoScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epThreeScore"
                    placeholder="Episode Three score" 
                    value={bipContestantInfo.epThreeScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epFourScore"
                    placeholder="Episode Four score" 
                    value={bipContestantInfo.epFourScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epFiveScore"
                    placeholder="Episode Five score" 
                    value={bipContestantInfo.epFiveScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epSixScore"
                    placeholder="Episode Six score" 
                    value={bipContestantInfo.epSixScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epSevenScore"
                    placeholder="Episode Seven score" 
                    value={bipContestantInfo.epSevenScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epEightScore"
                    placeholder="Episode Eight score" 
                    value={bipContestantInfo.epEightScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epNineScore"
                    placeholder="Episode Nine score" 
                    value={bipContestantInfo.epNineScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epTenScore"
                    placeholder="Episode Ten score" 
                    value={bipContestantInfo.epTenScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epElevenScore"
                    placeholder="Episode Eleven score" 
                    value={bipContestantInfo.epElevenScore}
                    onChange={handleBipChange}>
                    </input>
                    <input 
                    type="number" 
                    name="epTweleveScore"
                    placeholder="Episode Tweleve score" 
                    value={bipContestantInfo.epTweleveScore}
                    onChange={handleBipChange}>
                    </input>
                    <button type="submit">Add new Bip Contestant</button>
                </form>
            </div>
            <div>
                <ul>
                    {bipSelections.map((gbContestants, index) =>
                        <li key={index}>
                            <h3>{gbContestants.name}</h3>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>)}
                    </ul>
                </div>
        </div>
        )
    }
}

export default BIPContestantForm;