import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Header from "./Header";
import Pginations from "./Pginations";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [pokemonSearch, setPokemonSearch] = useState();
  const [filterType, setFilterType] = useState("All Pokemons");
  const [type, setType] = useState();
  const [filterPokemon, setFilterPokemon] = useState()

  const loginuser = useSelector((state) => state.loginuser);

  

  
  
  useEffect(() => {
    if (filterType === "All Pokemons") {
      const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100/`;

      axios
        .get(URL)
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err));
    } else {
      const URL = `https://pokeapi.co/api/v2/type/${filterType}/`;
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data.pokemon);
          const array = res.data.pokemon.map((e) => e.pokemon);
          setPokemons(array);
        })
        .catch((err) => console.log(err));
    }
  }, [filterType]);

 
 
 
  useEffect(() => {
    const URL_TYPE = `https://pokeapi.co/api/v2/type/`;

    axios
      .get(URL_TYPE)
      .then((res) => setType(res.data.results))

      .catch((err) => console.log(err));
  }, []);
  console.log(type)

  
  
  
  useEffect(() => {
    setFilterPokemon(
      pokemons?.filter((e) => e.name.includes(pokemonSearch.toLowerCase()))
    );
  }, [pokemonSearch]);



  const changeSelect = e => {
    setFilterType(e.target.value)
  }
  const changeInputText = e => {
    setPokemonSearch(e.target.value)
  }
  console.log(pokemons)

  //  PAGINACION POKEDEX--------------------------->
  const [currentPage, setCurrentPage] = useState(1)

  let arrayPokemons = []
  const pokemonsPerPage = 9
  if (pokemons?.length < pokemonsPerPage) {
    arrayPokemons = [...pokemons]
   
  } else {
    const lastPokemons = currentPage * pokemonsPerPage
    arrayPokemons = pokemons?.slice(lastPokemons - pokemonsPerPage, lastPokemons)
  }
  console.log(arrayPokemons)
  let arrayPages = []
  let quantityPages = Math.ceil(pokemons?.length / pokemonsPerPage) // 11 = cantidad paginas máximas
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock) // 2 = segundo bloque
  // Analiza si estamos en el último(true) o no(false)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    // Cuando es el último bloque
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  } else {
    // cuando no es el último bloque
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }
  

  return (
    <>
      <Header />
      <div className="container-pokedex">
        <div className="container-form-title-select">
          <h2 className="mesagge-welcome">
            <span className="welcome">Welcome {loginuser} !,</span>here you can
            find your favorite pokemon.
          </h2>

          <div className="slect-input">
            <form className="form-search" >
              <input
                className="input-pokemon"
                placeholder="Name Pokemon!"
                type="text"
                onChange={changeInputText}
                
              />
              <button className="btn-form-search">Search</button>
            </form>

            <select class="form-select" onChange={changeSelect}>
              <option class="form-options" value="All Pokemons">All Pokemons</option>
              {type?.map((item) => (
                <option class="form-options" key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Pginations
         arrayPages={arrayPages}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         quantityPages={quantityPages}
        />

        <div className="container__cards">
          {filterPokemon 
            ? filterPokemon?.map((pokemon) => (
                <PokemonCard
                  key={pokemon?.url}
                  url={pokemon?.url}
                  filterType={filterType}
                  type={type}
                />
              ))
            : arrayPokemons?.map((item) => (
                <PokemonCard
                  key={item.url}
                  url={item.url}
                  filterType={filterType}
                  pokemonSearch={pokemonSearch}
                  type={type}
                />
              ))}
       
       
    <footer>

        <Pginations
         arrayPages={arrayPages}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         quantityPages={quantityPages}
        />

    </footer>
        </div>


      
      </div>


      
    </>
  );
};

export default Pokedex;
