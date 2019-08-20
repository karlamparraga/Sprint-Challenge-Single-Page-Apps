import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard.js"

function EpisodeList() {
    
    const [episodes, setEpisode] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/')
        .then(res => res.json())
        .then(episodes =>
            {console.log(episodes.results)
            setEpisode(episodes.results)}
        )
    }, [])

    return(

        <section className="character-list grid-view"> 
            {episodes.map(episode => (
            <EpisodeCard episode={episode}/>
            ))}
      </section>
    )
}

export default EpisodeList;