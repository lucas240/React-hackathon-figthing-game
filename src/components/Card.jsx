import React from 'react';

const Card = ({ name, level, attack, defense, special, description, picture }) => {
  return (
    <div className="card m-2 p-0 col-5 col-md-3 col-lg-2 shadow mb-5">
      <img src="..." class="card-img-top" alt="..."/>
      <div className="card-body p-0">
        <h5 className="card-title text-center bg-dark text-white p-2">{name}</h5>
        <p className="card-text">{level}</p>
        <p className="card-text">{attack}</p>
        <p className="card-text">{defense}</p>
        <p className="card-text">{special}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">{picture}</p>
      </div>
    </div>
  );
};
export default Card;

