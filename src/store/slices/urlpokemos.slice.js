import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const urlpokemos = createSlice({
	name: 'urlpokemos',
    initialState: "",
    reducers: {
        setUrlPokemon: (state, action) => action.payload
    }
})
export const { setUrlPokemon} =urlpokemos.actions
export default urlpokemos.reducer;