import AccountManagement from "./AccountManagement";
import useUser from "../hooks/UseUser";
import SplashPage from "./SplashPage";



// import Leaderboard from "./Leaderboard";

function Home() {

    const [user] = useUser()
    // const auth = getAuth();


    console.log(user)
    if (user) {
        return (
            <div>
                <SplashPage />
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>Welcome to the bachelor franchise fantasy league</h1>
                <h2>Please register for an account or login</h2>
                <AccountManagement />
            </div>
        )

    }
}


export default Home;

//Home could be a splash page that prompts the user to log in 