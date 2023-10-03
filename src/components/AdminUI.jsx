import { useState } from "react";
import BIPContestantForm from "./BIPContestantForm";
import GBContestantForm from "./GBContestantForm";


function AdminUI() {



    // handle gbEdit submit (To update weekly scores) [HttpPut]

    // handle bipEdit submit (To update weekly scores) [HttpPut]

    // handle bipPost submit (Add newly added contestants) [HttpPost]

    // Get new weekly selections from playerContestant table [HttpGet]

    // Edit Player contestant table with episode totals [HttpPost]
    const [selectedComponent, setSelectedComponent] = useState(null)
    
    const handleButtonClick = (component) => {
        setSelectedComponent(component);
    }
    
    return (
        <div className="AdminUIContainer">
            <div className="buttons">
                <button onClick={() => handleButtonClick(<BIPContestantForm />)}>Bachelor in Paradise</button>
                <button onClick={() => handleButtonClick(<GBContestantForm />)}>Golden Bachelor</button>
            </div>
            {selectedComponent}
        </div>
    )
    }       
export default AdminUI;