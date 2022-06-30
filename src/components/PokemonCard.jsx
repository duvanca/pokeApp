import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPokemonGlobal } from "../store/slices/pokemonid.slice";

const PokemonCard = ({ url, filterType, pokemonSearch }) => {
    const [pokemon, setPokemon] = useState();

    const [pokemonType, setPokemonType] = useState();
    console.log(pokemonSearch)
    useEffect(() => {
        axios
            .get(url)
            .then((res) => setPokemon(res.data))
             .catch((err) => console.log(err));
    }, []);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickCard = () => {
        navigate(`/pokedex/${pokemon?.id}`);
        dispatch(setPokemonGlobal(pokemon));
    };


    return (
        <div>
            <article onClick={clickCard} className={pokemon?.types[0].type.name === "water" ? "card-pokemon-water" :
                pokemon?.types[0].type.name === "fire" ? "card-pokemon-fire" :
                    pokemon?.types[0].type.name === "electric" ? "card-pokemon-electric" :
                        pokemon?.types[0].type.name === "fairy" ? "card-pokemon-fairy" :
                            pokemon?.types[0].type.name === "grass" ? "card-pokemon-grass" :
                                pokemon?.types[0].type.name === "flying" ? "card-pokemon-flying" :
                                    pokemon?.types[0].type.name === "rock" ? "card-pokemon-rock" :
                                        pokemon?.types[0].type.name === "dragon" ? "card-pokemon-dragon" :
                                            pokemon?.types[0].type.name === "dark" ? "card-pokemon-dark" :
                                                pokemon?.types[0].type.name === "ground" ? "card-pokemon-ground" :
                                                    pokemon?.types[0].type.name === "bug" ? "card-pokemon-bug" :
                                                        pokemon?.types[0].type.name === "ghost" ? "card-pokemon-ghost" :
                                                            pokemon?.types[0].type.name === "ice" ? "card-pokemon-ice" :
                                                                pokemon?.types[0].type.name === "psychic" ? "card-pokemon-psychic" :
                                                                 "card-pokemon-normal"


            } >
                <img
                    className="card_img"
                    src={pokemon?.sprites.other['official-artwork'].front_default}
                    alt={pokemon?.name}
                />
                <div className="card_info">
                    <div className="type">
                        <div className="types">
                            <h3 className="name_pokemon">{pokemon?.name}</h3>
                            <h4>Tipo</h4>
                       <div className="types-container">
                            {pokemon?.types.map(item => 
                            
                            <h4 className="types-pokemon" key={item.type.url}>{item.type.name}</h4>
                            )
                        }
                        </div>    
                        <span className="span_"></span>
                        </div>
                        <div className="states">

                            <div className="states_first">
                                <div>
                                    <h5>HP</h5>
                                    <h3>{pokemon?.stats[0].base_stat}</h3>
                                </div>

                                <div>
                                    <h5>DEFENSE</h5>
                                    <h3>{pokemon?.stats[2].base_stat}</h3>

                                </div>

                            </div>

                            <div className="states_second">
                                <div>
                                    <h5>ATTACK</h5>
                                    <h3>{pokemon?.stats[1].base_stat}</h3>
                                </div>

                                <div>
                                    <h5>SPEED</h5>
                                    <h3>{pokemon?.stats[5].base_stat}</h3>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </article>
        </div>
    );
};

export default PokemonCard;
