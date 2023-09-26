import useUser from "../hooks/UseUser";

function splashPage() {

    const [loggedIn, user] = useUser()

    if (user) {
        return (
            <div className="splashContainer">
                <h2>Welcome {user.email}</h2>
                {/* include clickable cards for leaderboard, weekly draft, and other seasons */}
                <li>Leaderboard</li>
                <li>Weekly draft</li>
                <li>Other Season</li>
            </div>
        )
    }
}

export default splashPage;