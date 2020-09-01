import React from 'react';
import { useState , useEffect } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [countries , setCountries] = useState([]);
    useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    } , [])
    return (
        <div className = "home-style">
        <h1 className = "header-style">Total Countries : {countries.length}</h1>
            <div>
                {
                    countries.map(country => <Country country = {country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;