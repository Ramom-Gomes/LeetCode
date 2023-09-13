import React, { useState, useEffect } from 'react';

function App() {
  const [exerciseImages, setExerciseImages] = useState([]);

  useEffect(() => {
    async function fetchExerciseImages() {
      try {
        const response = await fetch('https://wger.de/api/v2/exerciseimage/');
        
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }

        const data = await response.json();
        setExerciseImages(data.results);
      } catch (error) {
        console.error('Ocorreu um erro:', error);
      }
    }

    fetchExerciseImages();
  }, []);

  return (
    <div>
      <h1>Imagens de exercícios</h1>
      <ul>
        {exerciseImages.map((exerciseImage) => (
          <li key={exerciseImage.id}>
            <img src={exerciseImage.image} alt={exerciseImage.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
