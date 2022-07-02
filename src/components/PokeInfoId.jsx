import React from "react";
import { useSelector } from "react-redux";

const PokeInfoId = () => {
  const pokemonfirst = useSelector((state) => state.pokemonid);

  // const arraystring = 
  // pokemonfirst?.moves.map((item) => item?.move.name);
  // console.log(arraystring);
  // let element = [];
  // for (let index = 0; index < arraystring.length / 4; index++) {
  //   element.push(arraystring[index]);
  // }

  // console.log(element);
  let tore = pokemonfirst?.abilities
   

  return (
    <div className="container-card">
      <article className="card-id-pokemon">
        <div className= {`card-pokemon-${pokemonfirst?.types[0].type.name}`}>

          <div className="name">
          <header >
            <img
              className="card_img-id"
              src={
                pokemonfirst?.sprites.other["home"].front_default
              }
              alt=""
            />
          </header>
            <div className="id">

            <h2 className= {`name-nums-${pokemonfirst?.types[0].type.name}`}>#{pokemonfirst?.id}</h2>
            </div>
            
            <h2 className="name-pokemon">
              <span className="line"></span>
            <h2 className = {`name-nums-${pokemonfirst?.types[0].type.name}`} >{pokemonfirst?.name}</h2>  
              <span className="line"></span>
            </h2>
          </div>
          <div className="height-weight">
            <div className="weight">
              <h5 className = {`name-nums-${pokemonfirst?.types[0].type.name}`}>weight</h5>
              <h4>{pokemonfirst?.weight}</h4>
            </div>
            <div className="height">
              <h5 className = {`name-nums-${pokemonfirst?.types[0].type.name}`}>height</h5>
              <h4>{pokemonfirst?.height}</h4>
            </div>
          </div>

          <div className="type-abilty">
            <div className="type-id">
              <h2 className = {`name-nums-${pokemonfirst?.types[0].type.name}`}>Type</h2>
              <h5>{pokemonfirst?.types.map((item) => item.type.name + "-")}</h5>
            </div>

            <div className="ability">
              <h2 className = {`name-nums-${pokemonfirst?.types[0].type.name}`}>Ability</h2>
              <div className="abilitys">
                {    
                    pokemonfirst?.abilities.map(item =>
                      
                      <h5 className="first-ability"key={item?.ability.url}>{item?.ability.name}</h5>
                      )

                }

                
                
              </div>
            </div>
          </div>
        </div>
         
         <div className="container-movements">

          <h2 className = {`name-nums-${pokemonfirst?.types[0].type.name}`}>
            MOVEMENTS<span className="line_"></span>
          </h2>
        <div className="movements">
          {
          pokemonfirst?.moves.map((item) => 
          <span key={item.move.url} className="movement-span"> {item.move.name}</span>
        
          )
          }
        </div>
         </div>
      </article>
    </div>
  );
};

export default PokeInfoId;
