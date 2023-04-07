import React, { createContext, useState } from 'react';

export const usecontextcurrent1 = createContext();

export const UsercurrentProvider = ({ children }) => {
    const [current2, setcurrent1] = useState([]);
    const updateUser1 = (data) => {
        setcurrent1([...current2, data]);
    };

    return (
        <usecontextcurrent1.Provider value={{ current2, updateUser1 }}>
            {children}
        </usecontextcurrent1.Provider>
    );
};
