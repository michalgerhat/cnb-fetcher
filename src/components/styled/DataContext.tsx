import React, { useState, createContext, FC } from 'react';
import {useQuery } from 'react-query';


interface IDataContext {
    plainTextData: string;
}

const defaultState: IDataContext = {
    plainTextData: ""
}

export const DataContext = createContext<IDataContext>(defaultState);

export const DataContextProvider: FC = ({children}) => {
    const [plainTextData, setPlainTextData] = useState("");

    const { isLoading, error, data } = useQuery('repoData', () => {
        fetch('/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt')
            .then(res => res.text())
            .then(res => setPlainTextData(res));
    });

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