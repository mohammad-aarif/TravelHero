import { useEffect, useState } from "react"


const useDestination = () => {
    const[destination, setDestination] = useState([])
    useEffect(() => {
        fetch('https://creepy-spell-57353.herokuapp.com/destination')
        .then(res => res.json())
        .then(data => setDestination(data))
    }, [])

    return[destination]
}

export default useDestination;