import React from 'react';
import './Country.css';
import { useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name , region , population , flag} = props.country;
    const history = useHistory();
    const handleClick = (countryCode) => {
        const url = `/name/${countryCode}`;
        history.push(url);
    }
    return (
        <div className = "country-style">
            <div>
                <img className = "country-flag-style" src={flag} alt=""/>
            </div>
            <div className = "country-detail-style">
                <h1>Country : {name}</h1>
                <h3>Region : {region}</h3>
                <h3>Population : {population}</h3>
                <button className = "btn-style" onClick = {() => handleClick(name)}><span className = "btn-text-style">Show Details</span></button>
            </div>
        </div>
    );
};

export default Country