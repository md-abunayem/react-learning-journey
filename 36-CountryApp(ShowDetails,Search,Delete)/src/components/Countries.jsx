import React from 'react'
import {v4 as uuid4} from "uuid";


import Country from './Country'
import styles from "./Countries.module.css";



const Countries = ({countries, deleteCountry}) => {
  return (
    <div className={styles.countriesContainer}>
    {countries.map((country)=>{
        const countryObj = {country, id:uuid4()} //make an object for the country with id 
        return <Country countryObj={countryObj} key={countryObj.id} deleteCountry={deleteCountry}/>
    })}
    </div>
  )
}

export default Countries