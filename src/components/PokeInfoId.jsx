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

  return (
    <div className="container-card">
      <article className="card-id-pokemon">
        <div className="name-id">

          <div className="name">
          <header className="img-pokemon">
            <img
              className="card_img-id"
              src={
                pokemonfirst?.sprites.other["official-artwork"].front_default
              }
              alt=""
            />
          </header>
            <h2 className="id">#{pokemonfirst?.id}</h2>
            <h2 className="name-pokemon">
              <span className="line"></span>
              {pokemonfirst?.name}
              <span className="line"></span>
            </h2>
          </div>
          <div className="height-weight">
            <div className="weight">
              <h5>weight</h5>
              <h4>{pokemonfirst?.weight}</h4>
            </div>
            <div className="height">
              <h5>height</h5>
              <h4>{pokemonfirst?.height}</h4>
            </div>
          </div>

          <div className="type-abilty">
            <div className="type-id">
              <h2 className="tilte-type">Type</h2>
              <h5>{pokemonfirst?.types.map((item) => item.type.name + "-")}</h5>
            </div>

            <div className="ability">
              <h2 className="tilte-ability">Ability</h2>
              <div className="abilitys">
                <h5 className="first-ability">{pokemonfirst?.abilities[0].ability.name}</h5>
                <h5 className="second-ability">{pokemonfirst?.abilities[1].ability.name}</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="movements">
          <h2>
            MOVEMENTS:<span className="line_"></span>
          </h2>
          {
          pokemonfirst?.moves.map((item) => 
          <span key={item.move.url} className="movement-span"> {item.move.name}</span>
        
          )
          }
        </div>
      </article>
    </div>
  );
};

export default PokeInfoId;
