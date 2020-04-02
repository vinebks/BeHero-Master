import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'


import './styles.css';
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Logon() {
    return (
        <div className="logon_container">
            <section className="form">
                <img src = {logoImg} alt="Be The Hero" />
                <form>
                    <h1>
                        Faça seu logon
                    </h1>
                    <input placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#E02041"/> Nao tenho cadastro</Link>
                </form>
            </section>

            <img src = {heroesImg} alt="Heroes" />
            
        </div>
    );
}

export default Logon;