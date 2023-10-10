import React, {useState} from 'react'
import Page from './Page'
const App = () => {
  const [isLight, setisLight] = useState(true);
  return (
      <Page isLight={isLight} setisLight={setisLight}/> 
  )
}

export default App