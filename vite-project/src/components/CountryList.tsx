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
        <div>
            <h2>찜한 나라</h2>
            <div>
                {selectedCountries.map((country) => (
                    <CountryCard
                        key={country.name.common}
                        country={country}
                        onClick={() => toggleCountrySelection(country)}
                    />
                ))}
            </div>
            <h2>전체 나라 목록</h2>
            <div>
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
