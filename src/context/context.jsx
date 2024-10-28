import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null); 
  const [fullName, setFullName] = useState('');
  console.log(user)
  

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser)); 
    }
  }, []);

  const login = ({ email, password }) => {
    const storedUser = JSON.parse(localStorage.getItem('signedUpUser'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setLoggedInUser(storedUser); 
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      alert('Login successful!');
      return true;
    } else {
  
      alert('Invalid email or password. Please sign up first.');
      return false;
    }
  };
  const signup = ({ email, password ,fullName}) => {
    const newUser = { email, password ,fullName};
    localStorage.setItem('signedUpUser', JSON.stringify(newUser));
    alert('Signup successful!');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setEmail('')
    setPassword('')
  };

  return (
    <AppContext.Provider
     value={{
       email , setEmail, 
       password , setPassword ,
       products ,setProducts ,
       signup , logout , loggedInUser , 
       setLoggedInUser , login ,
       fullName , setFullName
       


        
        }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
