import { configureStore } from '@reduxjs/toolkit'
import  loginuser from "./slices/loginuser.slice" 
import  pokemonid from './slices/pokemonid.slice'
import  urlpokemos from './slices/urlpokemos.slice'
export default configureStore({
  reducer: {
     loginuser,
     pokemonid,
     urlpokemos
	}
})