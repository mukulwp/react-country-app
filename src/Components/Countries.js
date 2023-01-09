import React from 'react';
import uuid from "react-uuid";
import Country from './Country';
import style from './Countries.module.css';

const Countries = (props) => {
  return (
      <section className={style.section}>
          {props.countries.map((country) => {
              const countryNew = { country, id: uuid() }
            return (<Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />)
          })}
    </section>
  )
}

export default Countries