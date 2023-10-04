import { useEffect, useState } from "react";

function GBContestantForm(){

    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const [gbSelections, setGbSelections] = useState([]);
    const [gbContestantInfo, setGbContestantInfo] = useState({
        name: "string",
        age: 0,
        hometown: "string",
        occupation: "string",
        bio: "string",
        photo: "string",
        status: "string",
        epOneScore: 0,
        epTwoScore: 0,
        epThreeScore: 0,
        epFourScore: 0,
        epFiveScore: 0,
        epSixScore: 0,
        epSevenScore: 0,
        epEightScore: 0,
        epNineScore: 0,
        epTenScore: 0,
        epElevenScore: 0,
        epTweleveScore: 0
    })

    const handleGbChange = (e) => {
        const { name, value } = e.target;
        setGbContestantInfo({...gbContestantInfo, [name]: value})
    };

    const handleGbStatusChange = (e) => {
        setGbContestantInfo({...gbContestantInfo, status: e.target.value });
    };

    const handleNewGbSubmit  = async(e) => {
        e.preventDefault();
    

        try {
            const response = await fetch('https://localhost:5001/api/Gb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(gbContestantInfo)
            });

            if (response.ok){
                console.log("new contestant successfully added")
                
                return<h3>BIP contestant successful added</h3>
            }
            else{
                console.error("failed to add new GB contestant")
                return<h3>Failed to add new BIP contestant</h3>
            }
        }
        catch (error){
            console.error('Error', error)
        }
    }

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

    if (error) {
        return <h1>Error: {error}</h1>
    }
    else if (!isLoaded) {
        return <h1>...Loading...</h1>
    }
    else {
        return (
            <div>
                <div>
                    <h1>Golden Bachelor Contestants</h1>
                    <h3>Add new Golden Bachelor Contestant</h3>
                    <form onSubmit={handleNewGbSubmit}>
                        <input 
                        type="string" 
                        name="name"
                        placeholder="name" 
                        value={gbContestantInfo.name}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="string" 
                        name="hometown"
                        placeholder="hometown" 
                        value={gbContestantInfo.hometown}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="string" 
                        name="occupation"
                        placeholder="occupation" 
                        value={gbContestantInfo.occupation}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="string" 
                        name="bio"
                        placeholder="bio" 
                        value={gbContestantInfo.bio}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="string" 
                        name="photo"
                        placeholder="photo url" 
                        value={gbContestantInfo.photo}
                        onChange={handleGbChange}>
                        </input>
                        <div className="statusRadioButton">
                            <label>
                                <input
                                type="radio"
                                name="status"
                                value="Active"
                                checked={gbContestantInfo.status === 'Active'}
                                onChange={handleGbStatusChange}/>Active
                            </label>
                            <label>
                                <input
                                type="radio"
                                name="status"
                                value="InActive"
                                checked={gbContestantInfo.status === 'Active'}
                                onChange={handleGbStatusChange}/>InActive
                            </label>
                        </div>
                        <input 
                        type="number" 
                        name="epOneScore"
                        placeholder="Episode one score" 
                        value={gbContestantInfo.epOneScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epTwoScore"
                        placeholder="Episode two score" 
                        value={gbContestantInfo.epTwoScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epThreeScore"
                        placeholder="Episode Three score" 
                        value={gbContestantInfo.epThreeScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epFourScore"
                        placeholder="Episode Four score" 
                        value={gbContestantInfo.epFourScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epFiveScore"
                        placeholder="Episode Five score" 
                        value={gbContestantInfo.epFiveScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epSixScore"
                        placeholder="Episode Six score" 
                        value={gbContestantInfo.epSixScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epSevenScore"
                        placeholder="Episode Seven score" 
                        value={gbContestantInfo.epSevenScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epEightScore"
                        placeholder="Episode Eight score" 
                        value={gbContestantInfo.epEightScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epNineScore"
                        placeholder="Episode Nine score" 
                        value={gbContestantInfo.epNineScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epTenScore"
                        placeholder="Episode Ten score" 
                        value={gbContestantInfo.epTenScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epElevenScore"
                        placeholder="Episode Eleven score" 
                        value={gbContestantInfo.epElevenScore}
                        onChange={handleGbChange}>
                        </input>
                        <input 
                        type="number" 
                        name="epTweleveScore"
                        placeholder="Episode Tweleve score" 
                        value={gbContestantInfo.epTweleveScore}
                        onChange={handleGbChange}>
                        </input>
                        <button type="submit">Add new Bip Contestant</button>
                    </form>
                </div>  
                <h1>GB Contestants</h1>
                <div>
                    <ul>
                        {gbSelections.map((gbContestants, index) =>
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

export default GBContestantForm;