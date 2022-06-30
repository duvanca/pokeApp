import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const urlpokemons = createSlice({
	name: 'urlpokemons',
    initialState: "",
    reducers: {
        setUrlPokemon: (state, action) => action.payload
    }
})
export const { setUrlPokemon} =urlpokemons.actions
export default urlpokemons.reducer;