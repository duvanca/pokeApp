import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonid = createSlice({
	name: 'pokemonid',
    initialState: "",
    reducers: {
        setPokemonGlobal: (state, action) => action.payload
    }
})
export const { setPokemonGlobal } =pokemonid.actions
export default pokemonid.reducer;