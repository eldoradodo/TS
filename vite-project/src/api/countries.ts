import axios from 'axios';
import { Country } from '../types/Country';

const API_URL = 'https://restcountries.com/v3.1/all';

export const getCountries = async (): Promise<Country[]> => {
    const response = await axios.get<Country[]>(API_URL);
    console.log('API 응답 데이터:', response.data);  // API 응답 데이터를 콘솔에 출력

    const countries = response.data.map(country => ({
        name: country.name,
        capital: country.capital,
        flags: country.flags,
    }));

    console.log('변환된 데이터:', countries);  // 변환된 데이터를 콘솔에 출력
    return countries;
};
