import React, { useEffect, useState } from 'react';
import { getCountries } from '../api/countries';
import { Country } from '../types/Country';
import CountryCard from './CountryCard';

const CountryList: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

    useEffect(() => {
        const loadCountries = async () => {
            const data = await getCountries();
            setCountries(data);
        };
        loadCountries();
    }, []);

    const toggleCountrySelection = (country: Country) => {
        if (selectedCountries.some(c => c.name.common === country.name.common)) {
            setSelectedCountries(selectedCountries.filter(c => c.name.common !== country.name.common));
            setCountries([...countries, country]);
        } else {
            setSelectedCountries([...selectedCountries, country]);
            setCountries(countries.filter(c => c.name.common !== country.name.common));
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-50 min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">찜한 나라</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {selectedCountries.map((country) => (
                    <CountryCard
                        key={country.name.common}
                        country={country}
                        onClick={() => toggleCountrySelection(country)}
                    />
                ))}
            </div>
            <h2 className="text-2xl font-bold mb-4 mt-8">전체 나라 목록</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {countries.map((country) => (
                    <CountryCard
                        key={country.name.common}
                        country={country}
                        onClick={() => toggleCountrySelection(country)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountryList;
