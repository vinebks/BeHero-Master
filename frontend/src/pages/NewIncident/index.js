import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg'

import api from "../../services/api";

function NewIncident() {
    const ong_id = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    async function handleRegisterIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value        
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ong_id,
                }
            })
            alert('Caso Cadastrado.')
            history.push('/profile');
        } catch (e) {
            alert('Erro no cadastro, tente novamente.')
        }

    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastrar Novo Caso</h1>
                    <p> Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#E02041" />Voltar Para Home</Link>
                </section>
                <form onSubmit={handleRegisterIncident}>
                    <input
                        placeholder="Titulo do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}>
                    </input>
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}>

                    </textarea>
                    <input placeholder="Valor em Reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}>

                    </input>
                    <button className="button" type="submit"> Register </button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;