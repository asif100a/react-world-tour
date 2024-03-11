const CountryData = ({ country, handleCountryFlags, handleVisitedCountry }) => {
    return (
        <div>
            <h3>Country Data: {country.name.common}</h3>
        </div>
    );
};

export default CountryData;