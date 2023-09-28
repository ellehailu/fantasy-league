
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig"

function useUser() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {

        const unlisten = auth.onAuthStateChanged(
            user => {
                if (user !== null) {
                    setLoggedIn(true);
                    setUser(user);

                    // define uID variable here?
                    // getting user info from firebase to make post request to api
                    // const uid = user.uid;
                    // console.log(uid);
                    // const email = user.email;
                    // console.log(email)
                }

                else {
                    setLoggedIn(false);
                    setUser(null);
                }
            }
        )
        return () => {
            unlisten()
        }

    }, [])
    return [loggedIn, user]
}

export default useUser