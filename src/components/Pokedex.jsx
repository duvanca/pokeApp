import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { useForm } from "react-hook-form";
import Select from "react-select";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [pokemonSearch, setPokemonSearch] = useState();
  const [filterType, setFilterType] = useState();
  const [type, setType] = useState();

  const loginuser = useSelector((state) => state.loginuser);

  const { handleSubmit, reset, register } = useForm();


  const submit = (data) => {
    if (data.namepokemon === "") {
      alert("campo vacio");
    } else {
      setPokemonSearch(pokemons.filter((pokemon) => pokemon?.name === data.namepokemon));
    }

    reset({
      namepokemon: "",
    });
  };

  useEffect(() => {
    const URL_TYPE = `https://pokeapi.co/api/v2/type/`;

    axios
      .get(URL_TYPE)
      .then((res) => setType(res.data.results))

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=7/`;

    axios
      .get(URL)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  }, [pokemonSearch]);

  const listTypes = [
    { label: "todos los pokemones", value: "todos los pokemones" },
    { label: "normal", value: "normal" },
    { label: "fighting", value: "fighting" },
    { label: "flying", value: "flying" },
    { label: "grass", value: "grass" },
    { label: "water", value: "water" },
    { label: "bug", value: "bug" },
    { label: "poison", value: "poison" },
    { label: "fire", value: "fire" },
    { label: "ground", value: "ground" },
  ];

  const selectOnchangeTYpes = (event) => {
    setFilterType(event.value);
  };

  return (
    <div>
      <h2 className="mesagge-welcome">
        <span className="welcome">Bienvenido {loginuser},</span>aqui podras
        encontrar tu pokemon favorito
      </h2>

      <div className="slect-input">
        <Select options={listTypes} onChange={selectOnchangeTYpes} />

        <form onSubmit={handleSubmit(submit)}>
          <input
            placeholder="Ingresa el nombre del pokemon"
            type="text"
            {...register("namepokemon")}
          />
          <button>search</button>
        </form>
      </div>

      <div className="container__cards">
        {pokemonSearch === undefined
          ? pokemons?.map((pokemon) => (
              <PokemonCard
                key={pokemon?.url}
                url={pokemon?.url}
                filterType={filterType}
              />
            ))
          : pokemonSearch?.map((item) => (
              <PokemonCard
                key={item.url}
                urls={item.url}
                filterType={filterType}
                pokemonSearch={pokemonSearch}
              />
            ))}
      </div>
    </div>
  );
};

export default Pokedex;
