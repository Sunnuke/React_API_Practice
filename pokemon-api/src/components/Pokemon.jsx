import React, { useState, useEffect } from 'react';


export default (props) => {
    const [pokemon , setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(data => data.json())
            .then(data => setPokemon(data.results))
    }, []);

    console.log(pokemon)

    return(
        <div className="pokemon">
            <h1>Pokemon From index 1 to 807</h1>
            <ul>
                <ol>
                    {
                        pokemon.map( (poke, i) =>
                            <li>{poke.name}</li>
                        )
                    }
                </ol>
            </ul>
        </div>
    )
}