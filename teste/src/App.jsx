import React, { useEffect, useState } from 'react';

function ExerciseList() {
  let [Vl, setVl] = useState("");
  let [Cd, setCd] = useState("");
  let [Qt, setQt] = useState("");
  let [Resultado, setResultado] = useState("");
  
  useEffect(() => {
    if(Cd == 1) {
      setVl(4);
    } if (Cd == 2) {
      setVl(4.50);
    } if (Cd == 3) {
      setVl(5);
    } if (Cd == 4) {
      setVl(2);
    } if (Cd == 5) {
      setVl(1,50);
    } else if (Cd > 5 || Cd < 1) {
      setVl("Produto não existe");
    };
    setResultado(Vl * Qt);
  }, [Cd, Qt])

  let Calcular  = () => {
    if(Cd == 1) {
      setVl(4);
    } if (Cd == 2) {
      setVl(4.50);
    } if (Cd == 3) {
      setVl(5);
    } if (Cd == 4) {
      setVl(2);
    } if (Cd == 5) {
      setVl(1,50);
    } else if (Cd > 5 || Cd < 1) {
      setVl("Produto não existe");
    };
  }

  return (
    <div>
      <input type="number" placeholder='codigo' onChange={e => (setCd(e.target.value)) } />
      <input type="number" placeholder='quantidade' onChange={e => (setQt(e.target.value)) } />
      <button onClick={Calcular}>Calcular</button>
      <div>{Resultado}</div>
    </div>
  );
}

export default ExerciseList;