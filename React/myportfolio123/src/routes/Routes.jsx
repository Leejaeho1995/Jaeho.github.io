import React from 'react'
import {Routes, Route} from 'react-router-dom'
import withRouter from '../hooks/withRouter'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import About from '../pages/About'

const AnimateRoutes = withRouter(({location}) =>(
    <TransitionGroup>
        <CSSTransition key={location.key} timeout={{
            enter: 400,
            exit:400
        }} classNames='page' unmountOnExit>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </CSSTransition>
    </TransitionGroup>

))
const AnimRoutes =() =>{
    return (
        <div>
            <AnimateRoutes />
        </div>
    )
}

export default AnimRoutes;