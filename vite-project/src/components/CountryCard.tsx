import React from 'react';
import { Country } from '../types/Country';

interface CountryCardProps {
    country: Country;
    onClick: () => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            className="border border-black p-4 cursor-pointer flex flex-col items-center text-center w-64 h-64 bg-gray-100 hover:bg-gray-200">
            <h2 className="text-lg font-bold mb-2">{country.name.common}</h2>
            <p className="text-sm">Capital: {country.capital?.join(', ')}</p>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="w-24 mt-2" />
        </div>
    );
};
export default CountryCard;
