import React, { useState, createContext, FC } from 'react';
import {useQuery } from 'react-query';


interface IDataContext {
    plainTextData: string;
}

const defaultState: IDataContext = {
    plainTextData: "Loading..."
}

export const DataContext = createContext<IDataContext>(defaultState);

export const DataContextProvider: FC = ({children}) => {
    const [plainTextData, setPlainTextData] = useState(defaultState.plainTextData);

    const { isLoading, error, data } = useQuery('repoData', () => {
        fetch('/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt')
            .then(res => res.text())
            .then(res => setPlainTextData(res));
    });

    if (error) {
        console.log(error);
        error instanceof Error && setPlainTextData("Error: " + error.message);
    }

    return (
        <DataContext.Provider
            value={{
                plainTextData: plainTextData
            }}
        >
                {children}
        </DataContext.Provider>
    );
    
}

export const DataContextConsumer = DataContext.Consumer;