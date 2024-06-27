import React from 'react';
import CountryList from './components/CountryList';

const App: React.FC = () => {
    return (
        <div className="App">
<h1 className="text-center text-6xl font-bold my-8">Countries of the World</h1>
            <CountryList />
        </div>
    );
};

export default App;
