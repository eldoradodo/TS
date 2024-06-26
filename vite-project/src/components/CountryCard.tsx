import React from 'react';
import { Country } from '../types/Country';

interface CountryCardProps {
    country: Country;
    onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
    return (
        <div onClick={onClick} style={{ border: '1px solid black', margin: '10px', padding: '10px', cursor: 'pointer' }}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital?.join(', ')}</p>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
        </div>
    );
};

export default CountryCard;
