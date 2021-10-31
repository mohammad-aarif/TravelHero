import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAppInit from "../Pages/Firebase/firebase.init";

const useFirebase = () => {
    firebaseAppInit()
    const[user, setUser] = useState({});
    const[err, setErr] = useState('');
    const[isLogin, setIsLogin] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleLogin = () => {
        setIsLogin(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLogin(false)
        });
        return () => unsubscribed;
    }, [])

    const logOut =() =>{
        setIsLogin(true)
        signOut(auth)
        .then(() => {
            setUser({})
            })
        .finally(() => setIsLogin(false))
    }

    return{
        googleLogin,
        user,
        isLogin,
        setIsLogin,
        logOut,
        setUser
    }

}

export default useFirebase;