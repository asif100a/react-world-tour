import { useState } from 'react';
import './Country.css';
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({country, handleVisitedCountry, handleCountryFlags}) => {
    const {name, flags, languages, capital, population, coatOfArms, cca3} = country;
    // console.log(country);

    // console.log(handleVisitedCountry);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    // const passCountryByParams = () => handleVisitedCountry(country);
    
    return (
        <div className={`country ${visited &&  `visited-country`}`}>
            <img src={flags.png} alt={flags.alt} className="country-img" />
            <img src={coatOfArms.svg} alt="" className='country-arms' />
            <h4 style={{color: visited? 'orange' : '#ffff00b3'}}>Country Name: {name?.common}</h4>
            <p>Official Name: {name.official}</p>
            <p>Language: {languages?.eng || languages?.ben}</p>
            <p>Capital of the country: {capital}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>

            <button className='mark-btn' onClick={() => { handleVisitedCountry(country); handleCountryFlags(country.flags.svg); }}>Mark as Visited</button>
            <br />
            <button className={visited? 'btn-visit-green' : 'btn-visit-yellow'} onClick={handleVisited}> {visited? 'Visited' : 'Go Now'} </button>
            {visited ? 'I have visited in this country.' : 'I should visit.'};
            <hr />
            <CountryDetails
                country={country} handleVisitedCountry={handleVisitedCountry} handleCountryFlags={handleCountryFlags} 
            ></CountryDetails>
        </div>
    );
};

export default Country;