import React from 'react';

const globalContext = React.createContext();

const GlobalProvider = globalContext.Provider;
const GlobalConsumer = globalContext.Consumer;

export { GlobalProvider, GlobalConsumer };
