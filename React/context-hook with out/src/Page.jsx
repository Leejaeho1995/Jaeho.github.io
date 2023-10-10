import React from 'react'
import Header from './Page/Header'
import Content from './Page/Content'
import Footer from './Page/Footer'

const Page = ({isLight, setisLight}) => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%"
    }}>
        <Header isLight={isLight} />
        <Content isLight={isLight} />
        <Footer isLight={isLight} setisLight={setisLight}/>
    </div>
  )
}

export default Page