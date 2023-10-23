import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom'
import { meta, portfolioData, introtext} from '../data/portfolio'
const Home = () => {
  return (
    <HelmetProvider>
        <section id='home' className='home'>
        <Helmet>
            <meta charSet='UTF-8' />
            <title> {meta.title} </title>
            <meta name='description' content={meta.description} />
        </Helmet>
        <div className="d-block d-lg-flex align-items-center justify-content-between">
            <div className="col-lg-6 col-12 ps-5">
                <h3 className='ms-5'>{introtext.title}</h3>
                <h1 className='py-3 px-5 mb-6'>
                    <Typewriter options={{
                        strings:[
                            introtext.animated.first,
                            introtext.animated.second,
                            introtext.animated.third
                        ],
                        autoStart:true,
                        loop:true,
                        deleteSpeed: 200
                    }} />
                </h1>
                <p className='ms-5'> {introtext.description}</p>
                <div className="mt-4 ps-5 btn-box">
                    <Link to='/portfolio' button className='btn btn-light me-4 px-4'>Portfolio</Link>
                    <Link to='/contact' button className='btn btn-light me-4 px-4'>Contact</Link>
                    <Link to='/about' button className='btn btn-light px-4'>About</Link>
                </div>
            </div>
            <div className="col-lg-6 col-12 text-center">
                <img src={introtext.img_url} alt='image' className='myimg'/>
                <img src={introtext.img_url2} alt='image2' className='myimg' />
            </div>
        </div>
        </section>
    </HelmetProvider>
  )
}

export default Home