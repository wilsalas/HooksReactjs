import React, { createContext, useContext } from 'react';
import Store from '../store/Store';

const NewContext = createContext()

// Create to context for render state 
const CountProvider = ({ children }) => (
    <NewContext.Provider value={Store()}>
        {children}
    </NewContext.Provider>
);

// Use State Global
const useGlobal = () => useContext(NewContext);

export {
    CountProvider,
    useGlobal
}