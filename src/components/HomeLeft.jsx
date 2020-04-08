import React from "react";
import HomeLeftTop from "./HomeLeftTop";
import HomeLeftBottom from "./HomeLeftBottom"
import axios from "axios";


export default () => {

    const [nigeria, setNigeria] = React.useState({})
    const [world, setWorld] = React.useState({})

    React.useEffect(() => {
        axios.get("https://api.covid19api.com/summary")
        .then(response => response.data)
        .then(response => {
            setNigeria(response.Countries[161])
            setWorld(response.Global)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <React.Fragment>
            <HomeLeftTop nigeria={nigeria}/>
            <HomeLeftBottom world={world}/>
        </React.Fragment>
    )
}