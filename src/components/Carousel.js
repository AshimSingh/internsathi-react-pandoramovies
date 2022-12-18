import React from 'react'
import Slider from "react-slick";
import './carousel.css'
const Carousel = () => {
  const data=[
    "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB620223487_.jpg",
    "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/G/31/marketing/prime/pdp/Robin_Benefit2._CB623228312_.jpg",
    "https://m.media-amazon.com/images/I/71ZQHw-dIIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/G/31/prime/detail_page/2018/Sep/Slash-Prime-BTF._CB623230677_.png",
  ]
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 4000,
      cssEase: "linear",
    }

  return (
    <>
      <div className='container-fluid carousel'>
        <div className='Carousel__image ' id='carosel'>
          <Slider className='Slider' {...settings}>
            {data.map((m)=>{
          return(
            <img className='Sliderimg' src={m}alt="img"></img>
          )
            })}
            
          </Slider>
          
      </div>
      </div>
    
    </>
  )
}
export default Carousel