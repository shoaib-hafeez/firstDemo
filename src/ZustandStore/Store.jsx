import { create } from 'zustand';



const useStore = create((set) => ({
  email: '',
  password : '',
  loggedInUser : '',
  fullName : null,
 
  
    // const storedUser = localStorage.getItem('loggedInUser');
    // if (storedUser) {
    //   setLoggedInUser(JSON.parse(storedUser)); 
    // }

}));

export default useStore;
