import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard.js"

export default function LocationsList() {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location/')
        .then(res => res.json())
        .then(locations => {
            console.log("locations: ", locations.results)
            setLocations(locations.results)
        })
        .catch(() => console.log("error fetching data"))
    }, [])
    
    return(
        <section className="character-list grid-view">
      
        {locations.map(location => (
          <LocationCard location={location}/>
        ))}
  
      </section>
    );
}
