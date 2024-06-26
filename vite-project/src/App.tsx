import React from 'react';
import CountryList from './components/CountryList';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Countries of the World</h1>
            <CountryList />
        </div>
    );
};

export default App;
