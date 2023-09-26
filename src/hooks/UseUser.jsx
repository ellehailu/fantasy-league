
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