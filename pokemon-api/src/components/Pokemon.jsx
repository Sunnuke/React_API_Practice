import React, { useState, useEffect } from 'react';


export default (props) => {
    const [pokemon , setPokemon] = useState([]);
    const [pokeCatch , setPokeCatch] = useState(false);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(data => data.json())
            .then(data => setPokemon(data.results))
    }, []);

    console.log(pokemon)

    const pokeGo = () => {
        setPokeCatch(!pokeCatch);
    }

    return(
        <div className="pokemon">
            <h1>Pokemon From index 1 to 807</h1>
            {
                pokeCatch ?
                <ul>
                    <ol>
                        {
                            pokemon.map( (poke, i) =>
                                <li>{poke.name}</li>
                            )
                        }
                    </ol>
                </ul>
                : <button onClick={ e => pokeGo() }>Fetch Pokemon</button>
            }
        </div>
    )
}