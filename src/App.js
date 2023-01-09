import React, { useState, useEffect } from "react";
import './App.css';
import Loading from './image/loading.gif';

import Countries from './Components/Countries';
import Search from "./Components/Search";

const url = "https://restcountries.com/v3.1/all";

function App() {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
    const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    setIsLoading(false);
      setError(null);
    } catch (error) {
       setIsLoading(false);
       setError(error);
    }
  }

  useEffect(() => {
    fetchData(url)
  }, []);

  
  const handleRemoveCountry = (name) => {
    const result = window.confirm("Are you sure to delete?");
    if (result) {
      const filter = filteredCountries.filter((country) => country.name.common !== name);
      setFilteredCountries(filter);
    }
  }

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    })
    setFilteredCountries(newCountries);
  }

  return <>
    <h1>Country App</h1>
    <Search onSearch={handleSearch} />
    {isLoading && <img src={Loading} alt="Loading" />}
    {error && <h3 style={{ color: "red" }}>{error.message}</h3>}
    {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
    </>
  
}

export default App;
