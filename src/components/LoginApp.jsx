import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../store/slices/loginuser.slice'


const LoginApp = () => {

  const {handleSubmit, reset, register} = useForm()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const submit = data => {
   
   if(data.nameUser=== ""){
    // alert("nombre")

   }else{
    dispatch(setNameGlobal(data.nameUser))
    reset({
      nameUser: ""
    })
    navigate('/Pokedex')
    console.log(data)}
  }


  return (
    <div>
        <article>
        <div>

        </div>
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/02/latest/20220527172939/Ash_%28Viajes_Pok%C3%A9mon%29_2.png/250px-Ash_%28Viajes_Pok%C3%A9mon%29_2.png" alt="ererer" />
        <h1>!Hola entrenador!</h1>

        <form onSubmit={handleSubmit(submit)}>
      <input placeholder='Ingresa tu nombre de entrenador' type="text" {...register('nameUser')} />
      <button>Go to Pokedex</button>
    </form>
        
        
        </article>



    </div>
  )
}

export default LoginApp