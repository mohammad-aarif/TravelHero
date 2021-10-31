import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAppInit = () => {
    initializeApp(firebaseConfig)
}
export default(firebaseAppInit)