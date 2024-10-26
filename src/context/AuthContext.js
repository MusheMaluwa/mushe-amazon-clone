import React, { createContext, useState, useEffect } from 'react';

// Create context with initial values
const AuthContext = createContext({
  isLoggedIn: false, 
  onLogout: () => {},  // Logout function
  onLogin: (email, password) => {}  // Login function
});

// Context Provider Component
export const AuthContextProvider = (props) => { // Add 'props' as parameter
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");
    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider  
      value={{
        isLoggedIn: isLoggedIn, 
        onLogout: logoutHandler,  // Should be 'logoutHandler' here
        onLogin: loginHandler    // Should be 'loginHandler'
      }}
    >
      {props.children}  // Access children from props
    </AuthContext.Provider>
  );
};

export default AuthContext;
