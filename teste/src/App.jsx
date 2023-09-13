import React, { useEffect, useState } from 'react';

function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const [exerciseImages, setExerciseImages] = useState({});

  useEffect(() => {
    const exerciseApiUrl = 'https://wger.de/api/v2/exercise/';
    const imageApiUrl = 'https://wger.de/api/v2/exerciseimage/';

    // Buscar exercícios
    fetch(exerciseApiUrl)
      .then((response) => response.json())
      .then((data) => {
        setExercises(data.results);

        // Mapear IDs de exercícios para URLs de imagens
        const imageUrls = {};
        data.results.forEach((exercise) => {
          if (exercise.images && exercise.images.length > 0) {
            const imageId = exercise.images[0].exercise_base;
            imageUrls[exercise.id] = `${imageApiUrl}${imageId}/`;
          }
        });
        setExerciseImages(imageUrls);
      })
      .catch((error) => {
        console.error('Erro ao buscar exercícios:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Exercícios</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <h2>Nome: {exercise.name}</h2>
            <p>Descrição: {exercise.description}</p>
            {exerciseImages[exercise.id] && (
              <img src={exerciseImages[exercise.id]} alt={`Imagem do exercício ${exercise.name}`} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
