import { useState,useEffect } from "react";

const useCity = () => {
    const [city, setCity] = useState([])
    useEffect(()=>{
        fetch('https://creepy-spell-57353.herokuapp.com/city')
        .then(res => res.json())
        .then(data => setCity(data))
    }, [])
    return [city]
}

export default useCity;