import { useEffect, useState } from "react"

const List = () => {
    const [chars, setChars] = useState([])

    useEffect(() => {
        const fetchAll = async() => {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json();
            setChars(data.results)
        }
        fetchAll()
    }, [])

    return (
        <>
            {
                chars.map((char) => {
                    return (
                        <>
                            <h1>{char.name}</h1>
                            <img src={char.image}></img>
                            <p>Gender: {char.gender}</p>
                            <p>Origin: {char.origin.name}</p>
                            <p>Status: {char.status}</p>
                        </>
                    )
                })
            }
        </>
    )
}

export default List