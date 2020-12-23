import React, { useState, useEffect } from 'react';
import RouterComponent from './Router';
import { authService } from 'fbase';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!authService.currentUser);
  return (
    <>
      <RouterComponent isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
};

export default App;
