import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country , setCountry] = useState([]);
    const {name , region , population , flag , callingCodes , capital , subregion , timezones , demonym , gini} = country;
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => {
            setCountry(data[0])
        })
    })
    return (
        <div className = "countryDetail-style">
            <div>
                <img className = "countryDetail-flag-style" src={flag} alt=""/>
            </div>
            <div className = "countryDetail-detail-style">
                <h1>Country : {name}</h1>
                <h3>Capital : {capital}</h3>
                <h3>Region : {region}</h3>
                <h3>Sub Region : {subregion}</h3>
                <h3>Population : {population}</h3>
                <h3>Calling Codes : {callingCodes}</h3>
                <h3>Timezones : {timezones}</h3>
                <h3>Demonym : {demonym}</h3>
                <h3>Global Information Networking Institute Index : {gini}</h3>
            </div>
        </div>
    );
};

export default CountryDetail;