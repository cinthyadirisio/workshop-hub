import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Workshops from "./views/Workshops/Workshops";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Workshop from "./views/Workshop/Workshop";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/workshops"} element={<Workshops />} />
            <Route path={"/workshops/:id"} element={<Workshop />} />
            <Route path={"/register"} element={<Register />} />
            <Route path={"/login"} element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
