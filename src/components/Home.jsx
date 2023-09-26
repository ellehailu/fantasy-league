import AccountManagement from "./AccountManagement";
import useUser from "../hooks/UseUser";
import SplashPage from "./SplashPage";
import Seasons from "./Seasons";

// import Leaderboard from "./Leaderboard";

function Home() {

    const [loggedIn, user] = useUser()
    // const auth = getAuth();


    console.log(user)
    if (user) {
        return (
            <div>
                <Seasons />
            </div>
        );
    }
    else {
        return (
            <div>
                <h6>Welcome to the bachelor franchise fantasy league</h6>
                <p>Please register for an account or login</p>
                <AccountManagement />
            </div>
        )

    }
}


export default Home;

//Home could be a splash page that prompts the user to log in 