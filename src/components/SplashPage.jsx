import useUser from "../hooks/UseUser";
import React, {useState} from "react";
import Leaderboard from "./LeaderBoard";
import WeeklyDraft from "./WeeklyDraft";
import Seasons from "./Seasons";

function splashPage() {

    const [loggedIn, user] = useUser()
    const [selectedComponent, setSelectedComponent] = useState(null)

    const handleItemClick = (component) => {
        setSelectedComponent(component);
    }

// maybe replace these li with a welcome message and add a nav bar with clickable buttons
// Also consider using routes

    if (user) {
        return (
            <div className="splashContainer">
                <h2>Welcome {user.email}</h2>
                {/* include clickable cards for leaderboard, weekly draft, and other seasons */}
                <div>
                    <ul>
                    <li className='listContainer' onClick={() => handleItemClick(<Leaderboard />)}>Leaderboard</li>
                    <li className='listContainer' onClick={() => handleItemClick(<WeeklyDraft />)}>Weekly Draft</li>
                    <li className='listContainer' onClick={() => handleItemClick(<Seasons />)}>Other Seasons</li>
                    </ul>
                    {selectedComponent}
                </div>
            </div>
        )
    }
}

export default splashPage;