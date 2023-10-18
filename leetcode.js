/*
import React, { useState } from 'react';
import './exercicios.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function AddExerciseScreen({ exercise, onClose }) {
  const [creatingPlan, setCreatingPlan] = useState(false);
  const [newPlanName, setNewPlanName] = useState('');

  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  const userPlans = JSON.parse(localStorage.getItem('planos')) || {};

  const handleCreatePlan = () => {
    setCreatingPlan(true);
  };

  const handleSavePlan = () => {
    const newPlan = { name: newPlanName, exercises: [exercise] };
    
    const userEmail = currentUser.email;
    const userPlansForEmail = userPlans[userEmail] || {};
    
    if (userPlansForEmail[newPlanName]) {
      alert('Já existe um plano com esse nome. Escolha outro nome para o plano.');
      return;
    }
    
    userPlansForEmail[newPlanName] = newPlan;
    userPlans[userEmail] = userPlansForEmail;
    
    localStorage.setItem('planos', JSON.stringify(userPlans));

    setCreatingPlan(false);
    setNewPlanName('');
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <AiOutlineCloseCircle onClick={onClose} size={25} className='modal-close'/>
        <h2 className='adicionar-titulo'>Adicione o exercício</h2>
        <p className='adicionar-nome'>Nome do Exercício: {exercise.name}</p>

        {!creatingPlan ? (
          <div>
            <button className='criarPlano' onClick={handleCreatePlan}>Criar meu Plano</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Nome do Plano"
              value={newPlanName}
              onChange={(e) => setNewPlanName(e.target.value)}
            />
            <button className="salvarPlano" onClick={handleSavePlan}>Salvar Plano</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddExerciseScreen;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserExerciseList() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userPlans = JSON.parse(localStorage.getItem('planos')) || {};

  const userEmail = currentUser.email;
  const userPlansForEmail = userPlans[userEmail] || {};

  const selectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const goBack = () => {
    setSelectedPlan(null);
  };

  return (
    <div className='container-meusPlanos'>
      <h1 className='meusPlanosTitulo'>Meus planos:</h1>
      {selectedPlan ? (
        <div className='meusPlanosLista'>
          <button className='MeusPlanosBotaoVoltarList' onClick={goBack}>Voltar para a lista de planos</button>
          <h2 className='MeusPlanosPlano'>Exercícios no Plano: {selectedPlan.name}</h2>
          <ul className='listaDosExercicios'>
            {selectedPlan.exercises.map((exercise, index) => (
              <li className='exercicios' key={index}>
                <div>
                  <p className='exerciciosNumero'>Número: {exercise.id}</p>
                  <h3 className='exerciciosNome'>Nome: {exercise.name}</h3>
                  <p className='exerciciosEquipamento'>Equipamento: {exercise.equipment}</p>
                  <p className='exerciciosAlvo'>Músculo alvo: {exercise.target}</p>
                </div>
                <img className='exerciciosImagem' src={exercise.gifUrl} alt="" />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className='meus-planos'>
          {Object.values(userPlansForEmail).map((plan, index) => (
            <li key={index}>
              <button className='planos-existentes' onClick={() => selectPlan(plan)}>{plan.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserExerciseList;
*/