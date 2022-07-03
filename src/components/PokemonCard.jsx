import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPokemonGlobal } from "../store/slices/pokemonid.slice";
import { setUrlPokemon } from "../store/slices/urlpokemos.slice";

const PokemonCard = ({ url,pokemonSearch,type }) => {
    const [pokemon, setPokemon] = useState();


   
   
    useEffect(() => {
        axios
            .get(url)
            .then((res) => setPokemon(res.data))
             .catch((err) => console.log(err));
    }, []);
        
    if(pokemon){

        const dispoke = useDispatch();
           dispoke(setUrlPokemon(pokemon))
    }
    

   


    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const clickCard = () => {
        navigate(`/pokedex/${pokemon?.id}`);
        dispatch(setPokemonGlobal(pokemon));
    };
    
   console.log(pokemon)
 
   
   

    return (
        
            <article onClick={clickCard} className ={`card-pokemon-${pokemon?.types[0].type.name}`}>
                <img
                    className="card_img"
                    src={pokemon?.sprites.other['home'].front_default}
                    alt={pokemon?.name}
                />
                <div className="card_info">
                    <div className="type">
                        <div className="types">
                            <h3 className={`name-nums-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
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
                                    <h3 className={`name-nums-${pokemon?.types[0].type.name}`}>{pokemon?.stats[0].base_stat}</h3>
                                </div>

                                <div>
                                    <h5>DEFENSE</h5>
                                    <h3 className={`name-nums-${pokemon?.types[0].type.name}`}>{pokemon?.stats[2].base_stat}</h3>

                                </div>

                            </div>

                            <div className="states_second">
                                <div>
                                    <h5>ATTACK</h5>
                                    <h3 className={`name-nums-${pokemon?.types[0].type.name}`}>{pokemon?.stats[1].base_stat}</h3>
                                </div>

                                <div>
                                    <h5>SPEED</h5>
                                    <h3 className={`name-nums-${pokemon?.types[0].type.name}`}>{pokemon?.stats[5].base_stat}</h3>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </article>
           
        
    );
};

export default PokemonCard;
