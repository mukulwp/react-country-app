import React from 'react';
import style from './Country.module.css';

const Country = (props) => {
  const { name, flags, capital, population, area } = props.country;
  
  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  }
    
  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} />
        <h3>Name: {name.common}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population}</h3>
        <h3>Area: {area}</h3>
      </div>
      <button type="" onClick={() => {
        handleRemoveCountry(name.common)
      }}>
        Remove Country
      </button>
    </article>
  );
}

export default Country