import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import withRouter from './hooks/withRouter'
import AnimRoutes from './routes/Routes'
import Header from './layout/Header';

const _ScrollToTop = (props) =>{
  const {pathname } = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[pathname])
  return props.children;
}
const ScrollTop = withRouter(_ScrollToTop)

const App = () => {
  return (
    <Router basename= {process.env.PUBLIC_URL}>
      <ScrollTop>
      <Header/>
      <AnimRoutes />
      </ScrollTop>
    </Router>
  )
}

export default App