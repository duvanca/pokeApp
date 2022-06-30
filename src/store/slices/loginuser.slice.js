import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const loginuser = createSlice({
	name: 'loginuser',
    initialState: "",
    reducers: {
        setNameGlobal: (state, action) => action.payload
    }
})
export const { setNameGlobal } = loginuser.actions
export default loginuser.reducer;