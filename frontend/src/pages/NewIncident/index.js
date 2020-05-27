import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'


import './styles.css';
import logoImg from '../../assets/logo.svg'

function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastrar Novo Caso</h1>
                    <p> Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#E02041" />Voltar Para Home</Link>
                </section>
                <form>
                    <input placeholder="Titulo do Caso"></input>
                    <textarea placeholder="Descrição"></textarea>
                    <input placeholder="Valor em Reais"></input>
                    <button className="button" type="submit"> Register </button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;