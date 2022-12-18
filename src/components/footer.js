import React from 'react'
// import "./Footer.scss"
import { Link } from 'react-router-dom'
import "./footer.css"
const Footer = () => {
  const data=[
    {
      title:"Get to know us",
      sub:["About us","Career","Press Release"]
    },
    {
      title:"Connect with us",
      sub:["Facebook","Instagram","Twitter"]
      // sub:{name:"ashim",address:"aus"}
    },
    {
      title:"Resent Searches",
      sub:["Latest Movie","Chrish Hemsworth","Avater the way of water","Avangers","Star War",]
    },

  ]
  return (
    <>
       <div className='container-fluid footer__container d-flex align-items-center'>
        
          <div className='container text-light mt-3' >
            <div className='header__title'><Link to={'/'}><h1>Pandora Movies</h1></Link></div>
          <div className='row'>
          
            {
            data.map((m)=>{
              return(
                <Footer__content {...m} />
              )
            })
          }
          
          </div>
          </div>
       </div>
       <div className='copyright'>2022 © Ashim Incorporated. All Rights Reserved.</div>
    </>
  )
}
const Footer__content=({title,sub})=>{
      return(
        <>
          <div className='col-md-4 col-6 mt-2'>
            <div className='footer__title'>
                {title}
              </div>
              <div className='footer__subtitle'>
                {
                  sub.map((m)=>{
                    return(
                      <a href='https://www.instagram.com/ashim_singh_thapa/'><span>{m}</span></a>
                    )
                  })
                }
              </div>
          </div>
        </>
      )
}

export default Footer