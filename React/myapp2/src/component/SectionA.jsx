import React from 'react'
import { RiFacebookBoxFill, RiKakaoTalkFill, RiInstagramFill} from "react-icons/ri";
const SectionA = () => {
  return (
    <div className='section-a'>
        <h2>We Are</h2>
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <div className="icon-box">
        <span><RiFacebookBoxFill /></span>
        <span><RiKakaoTalkFill/></span>
        <span><RiInstagramFill/></span>
    </div>
    </div>
    
  )
}
export default SectionA