import React, { createContext, useState } from 'react';

export const usecontextcurrent = createContext();

export const UserProvidercurrnrtProvider = ({ children }) => {
    const [current1, setcurrent] = useState([]);
    const updateUser = (data) => {
        setcurrent([...current1, data]);
        console.log("Context ",current1);
    };

    return (
        <usecontextcurrent.Provider value={{ current1, updateUser }}>
            {children}
        </usecontextcurrent.Provider>
    );
};
