import React from 'react'
import { RiAncientGateLine} from "react-icons/ri";
import Card from './Card';
const cardlist =[
  {greenTitle:"inspiratio",
  title:"Bradning",
  img:"./Imgaes/features1.jpg",
  content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  {greenTitle:"research",
  title:"Marketing",
  img:"./Imgaes/features2.jpg",
  content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
  {greenTitle:"branding",
  title:"Design",
  img:"./Imgaes/features3.jpg",
  content:"불라불라불라불놀반아."}
]
const SectionB = () => {
  return (
    <div className='container section-b'>
      <div className="title">
          <span><RiAncientGateLine/></span>
          <h1>Our Services</h1>
      </div>
      <div className="row">
        <Card {...cardlist[0]} /> {/*greenTitle='값, title='값, content='값 */}
        <Card {...cardlist[1]}/>
        <Card {...cardlist[2]}/>
      </div>
      </div>
  )
}

export default SectionB