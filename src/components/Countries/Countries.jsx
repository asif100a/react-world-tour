import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountry, setVisitedCountry] = useState([]);
    const [countryFlags, setCountryFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountry = country => {
        console.log('visited country added.');
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    };

    const handleCountryFlags = flags => {
        const newCountryFlag = [...countryFlags, flags];
        setCountryFlags(newCountryFlag);
    };

    return (
        <div>
            <h3>Country Name: {countries.length}</h3>
            <div>
                {/* Visited Countries */}
                <h4>Visited Countries: {visitedCountry.length}</h4>
                <div style={{display: 'flex', gap: '8px'}}>
                    <ol style={{display: 'flex', flexDirection: 'column', gap: '37px'}}>
                        {
                            visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                        }
                    </ol>

                    <p>
                        {
                            countryFlags.map((flag, idx) => <div key={idx}><img style={{ width: '100px', height: '55px' }} src={flag}></img></div>)
                        }
                    </p>
                </div>
            </div>

            {/* Display Visited Countries */}
            <div className="country-container">
                {
                    countries.map(country => (
                        <Country
                            country={country}
                            key={country.cca3}
                            handleVisitedCountry={handleVisitedCountry}
                            handleCountryFlags={handleCountryFlags}>

                        </Country>
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;