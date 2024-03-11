import CountryData from "../CountryData/CountryData";
const CountryDetails = (props) => {
    // const {country, handleVisitedCountry, handleCountryFlags} = props;
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetails;