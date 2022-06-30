import "./App.css";
import LoginApp from "./components/LoginApp";
import { HashRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import PokeInfoId from "./components/PokeInfoId";
import ProtectedRoutes from "./components/ProctedRoutes";


function App() {
  return (
    <div className="App">

      <header className="App__header">

      </header>
      <Routes>
      <Route path="/" element={<LoginApp />} />
       


        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex/:id" element={<PokeInfoId />} />

          <Route path="/Pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
