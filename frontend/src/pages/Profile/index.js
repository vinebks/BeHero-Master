import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'


import './styles.css';
import logoImg from '../../assets/logo.svg'

function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"></img>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
        </div>
    );
}

export default Profile;