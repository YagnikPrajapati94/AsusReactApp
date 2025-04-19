import React, { createContext, useState } from 'react';

// Create the context with a default value of null
export const UserContext = createContext(null);

const Store = ({ children }) => {
    const [loginuser, setlogin] = useState(null);  // Manage the login state

    return (
        <UserContext.Provider value={{ loginuser, setlogin }}>
            {children}  {/* Pass the children (your app components) here */}
        </UserContext.Provider>
    );
};

export default Store;
