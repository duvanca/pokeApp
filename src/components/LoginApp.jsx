import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameGlobal } from "../store/slices/loginuser.slice";
import logo from "../img/pokedex.png";

const LoginApp = () => {
  const { handleSubmit, reset, register } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submit = (data) => {
    if (data.nameUser === "") {
      // alert("nombre")
    } else {
      dispatch(setNameGlobal(data.nameUser));
      reset({
        nameUser: "",
      });
      navigate("/Pokedex");
      console.log(data);
    }
  };

  return (
    <article className="loginapp">
      <div className="container-imglogin">
        <img
          className="ash-img"
          src="https://www.pngmart.com/files/12/Ash-Ketchum-PNG-Clipart.png"
          alt="ererer"
        />

        <form className="form-login" onSubmit={handleSubmit(submit)}>
          <img className="logo-pokedex" src={logo} alt="" />
          <h1>!Hola entrenador!</h1>
          <h2>Necesito tu nombre para comenzar.</h2>
          <input
            placeholder="Ingresa tu nombre de entrenador"
            type="text"
            {...register("nameUser")}
          />
          <button className="btn-login">Go to Pokedex</button>
        </form>
      </div>
    </article>
  );
};

export default LoginApp;
