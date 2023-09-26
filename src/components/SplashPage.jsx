import useUser from "../hooks/UseUser";

function splashPage() {

    const [loggedIn, user] = useUser()

    if (user) {
        return (
            <div>
                <h2>Welcome {user.email}</h2>
            </div>
        )
    }
}

export default splashPage;