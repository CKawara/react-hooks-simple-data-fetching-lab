import React, {useEffect, useState} from "react";

function App(){
    const [dogs, setDogs] = useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp)=> resp.json())
        .then((data)=>{
            setDogs(data.message)
        })
    }, [])

    if(!dogs)return <p>'Loading...'</p>
    return(
        <img src={dogs} alt="A Random Dog"></img>
    )
}
export default App