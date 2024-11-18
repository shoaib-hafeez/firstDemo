import { create } from 'zustand';

const useStore = create((set) => ({
  email: '',
  password: '',
  fullName: '',
  loggedInUser: null,

  // Update email
  setEmail: (input) => set({ email: input }),

  // Update password
  setPassword: (input) => set({ password: input }),

  // Update fullName
  setFullName: (input) => set({ fullName: input }),

  // Signup user
  signup: ({ email, password, fullName }) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { email, password, fullName };

    // Save user to local storage
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Signup successful! You can now login.');
  },

  // Login user
  login: ({ email, password }) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      set({ loggedInUser: foundUser });
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      alert('Login successful!');
      return true;
    } else {
      alert('Invalid email or password. Please sign up first.');
      return false;
    }
  },

  // Logout user
  logout: () => {
    set({
      loggedInUser: null,
      email: '',
      password: '',
      fullName: '',
    });
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
  },
}));

export default useStore;
