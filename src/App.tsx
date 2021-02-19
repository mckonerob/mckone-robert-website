import React from 'react';
import McKone_Robert from "./data/McKone_Robert";
import './App.css';
import Profile from './components/Profile';

function App() {
    return (
        <Profile data={McKone_Robert} />
    );
}

export default App;
