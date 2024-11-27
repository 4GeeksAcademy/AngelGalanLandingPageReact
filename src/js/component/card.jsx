import React from 'react';

const Card = ({ title, text, imgSrc }) => (
  <div className="col mb-2">
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Find Out More!</a>
      </div>
    </div>
  </div>
);

export default Card;