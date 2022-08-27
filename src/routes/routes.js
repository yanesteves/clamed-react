import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../App";

// Códigos básicos
import Home from "../pages/home";
import HomeClassBased from '../pages/homeClassBased';
import ContagemRef from '../pages/contagemRef';
import Case1 from "../pages/case1";
import Case3Ref from "../pages/case3Ref";

// Aplicações
import Cronometro from "../pages/cronometro";
import GithubIntegration from '../pages/githubIntegration';
import NFTStore from '../pages/nftStore';
import StarWars from '../pages/starWars';

// Exercicios
import Exercicio05 from "../pages/exercicio05";
import Exercicio07 from '../pages/exercicio07';
import Exercicio09 from '../pages/exercicio09';
import Exercicio10 from '../pages/exercicio10';

const RoutesDeclaration = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route element={<App/>} path="/" exact />
                {/* Basic */}
                <Route element={<Home/>} path="/basic/exemplo1-hook" />
                <Route element={<HomeClassBased />} path='/basic/exemplo1-class-based'/>                
                <Route element={<Case1 />} path='/basic/exemplo2'/>
                <Route element={<ContagemRef />} path='/basic/exemplo3'/>
                <Route element={<Case3Ref />} path='/basic/exemplo4'/>

                {/* Apps */}
                <Route element={<Cronometro />} path="/cronometro" />
                <Route element={<StarWars/>} path="/star-wars" />
                <Route element={<NFTStore/>} path="/nft-store" />
                <Route element={<GithubIntegration />} path="/github-integration" />

                {/* Exercicios */}
                {/* <Route element={<Exercicio01 />} path="/exercicio/s09e01" />
                <Route element={<Exercicio02 />} path="/exercicio/s09e02" />
                <Route element={<Exercicio03 />} path="/exercicio/s09e03" />
                <Route element={<Exercicio04 />} path="/exercicio/s09e04" />
                
                <Route element={<Exercicio06 />} path="/exercicio/s09e06" /> */}
                <Route element={<Exercicio05 />} path="/exercicio/s09e05" />
                <Route element={<Exercicio07 />} path="/exercicio/s09e07" />
                {/* <Route element={<Exercicio08 />} path="/exercicio08" /> */}
                <Route element={<Exercicio09 />} path="/exercicio/s09e09" />
                <Route element={<Exercicio10 />} path="/exercicio/s09e10" />
                
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesDeclaration;