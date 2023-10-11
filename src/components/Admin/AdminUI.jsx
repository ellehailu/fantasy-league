import { useState } from "react";
import BIPContestantForm from "./BIPContestantForm";
import GBContestantForm from "./GBContestantForm";
import DisplayScore from "./DisplayScore";



function AdminUI() {

    const [selectedComponent, setSelectedComponent] = useState(null)
    
    const handleButtonClick = (component) => {
        setSelectedComponent(component);
    }
    
    return (
        <div className="AdminUIContainer">
            <div className="buttons">
                <button onClick={() => handleButtonClick(<BIPContestantForm />)}>Bachelor in Paradise</button>
                <button onClick={() => handleButtonClick(<GBContestantForm />)}>Golden Bachelor</button>
                <button onClick={() => handleButtonClick(<DisplayScore />)}>Edit Player Score</button>
            </div>
            {selectedComponent}
        </div>
    )
}       
export default AdminUI;