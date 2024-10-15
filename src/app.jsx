import React from "react";
import Boot from "./css.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsNavi from "./components/api.jsx";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Boot/>}></Route>
            <Route path= "/description" element ={<CardsNavi/>}/>
            </Routes>
        </BrowserRouter>

    )
}
export default App