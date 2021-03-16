import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import './Home.css';


function Home() {
    return (
        <div className="home">
            <br/>
            <FaLightbulb className="icon-info"/>
            <h1> Teste AVA </h1>
            <p> 
                O objetivo foi criar um website de lista de atividades, 
                aonde mostre a descrição das atividades individualmente quando clicadas.
               <br/> <br/> <b> Obs.: No canto esquerdo clique no ícone semelhante a uma 
                pilha de livros para visualizar as atividades registradas. </b>
            </p>
        </div>
    )
}

export default Home
