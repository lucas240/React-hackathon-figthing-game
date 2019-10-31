import React from 'react';
import './Card.css'

const CardFighter = ({ name, level, attack, defense, special, description, picture,  }) => {
  return (
    <div className="card shadow mb-5">
      <img src={picture} className="card-img-top " alt="monster"/>
      <div className="card-body p-0">
        <h2 className="card-title text-center bg-dark text-white p-2">{name}</h2>
        <p className="card-text  text-center"><b>Level</b>: {level}</p>
        <div className="row justify-content-around">
          <p className="card-text"><b>Atk</b>: {attack}</p>
          <p className="card-text"><b>Def</b>: {defense}</p>
        </div>
        <p className="card-text  text-center"><b>Special</b>: {special}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
export default CardFighter;

