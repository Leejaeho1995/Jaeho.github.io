import React, { useState } from 'react'
import Page from './Page'
import { ThemeContext } from './Context/ThemeContext';
import { UserContext } from './Context/UserContext';

const App = () => {
  const [isLight, setisLight] = useState(true);
  return (
    <UserContext.Provider value={'홍길동'}>
      <ThemeContext.Provider value={{isLight, setisLight}}>
      <Page /> 
      </ThemeContext.Provider>
      </UserContext.Provider>
  )
}

export default App