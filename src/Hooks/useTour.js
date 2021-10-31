import { useEffect, useState } from "react"

const useTour = () => {
    const [tour, setTour] = useState([]);
    useEffect(()=>{
        fetch('https://creepy-spell-57353.herokuapp.com/tour')
        .then(res => res.json())
        .then(data => setTour(data))
    }, [])
    return[tour]
}
export default useTour