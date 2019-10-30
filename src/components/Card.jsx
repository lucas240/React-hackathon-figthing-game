import React from 'react';
import './Card.css'

const Card = ({ name, level, attack, defense, special, description, picture }) => {
  return (
    <div className="card m-2 p-0 col-5 col-md-3 col-lg-2 shadow mb-5">
      <img src={picture} class="card-img-top" alt="monster"/>
      <div className="card-body p-0">
        <h2 className="card-title text-center bg-dark text-white p-2">{name}</h2>
        <p className="card-text"><b>Level</b>: {level}</p>
        <p className="card-text"><b>Attack</b>: {attack}</p>
        <p className="card-text"><b>Defense</b>: {defense}</p>
        <p className="card-text"><b>Special</b>: {special}</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
export default Card;

