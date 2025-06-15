import { useEffect } from 'react';
import { useState } from 'react'

import Countries from './components/Countries';
import Search from './components/Search';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url)=> {
    try {
      const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
    setError(null);
    // console.log(data[0]);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    
    fetchData("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population");
  }, [])
  
  const deleteCountry = (name) =>{
    const newCountries = countries.filter((country)=> country.name.common !== name);
    setCountries(newCountries);
  }


  const searchCountry =(name)=>{
          console.log(name)

    const filteredCountries = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(name.toLowerCase());  //can also use includes(value) method-->Though their work is slidely(a little bit) deffirent
    })

    setCountries(filteredCountries);
  }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>Country App</h1>
      <Search searchCountry={searchCountry}></Search>
      {isLoading && <p>Data is loading....</p>}
      {error && <p>{error.mes}</p>}
      {countries && <Countries countries={countries} deleteCountry={deleteCountry}></Countries>}
    </div>
  )
}

export default App
