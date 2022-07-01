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
          <img className="logo-pokedex" src={logo} alt="pokedex" />
          <h1 className="title-login"> Hello Coach !</h1>
          <span className="span-text">I need your name to continue...</span>
          <div className="input-btn">
          <input
          className="input-login"
            placeholder="Ingresa tu nombre de entrenador"
            type="text"
            {...register("nameUser")}
          />
          <button className="btn-login">Go to Pokedex</button>

          </div>
        </form>
      </div>
    </article>
  );
};

export default LoginApp;
