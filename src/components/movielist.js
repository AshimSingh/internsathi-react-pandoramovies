import React from 'react'
import './movielist.css'
import {useFetch} from '../fetch/useFetch'
import { Link } from 'react-router-dom'
const Movielist = () => {
    const url='https://www.omdbapi.com/?s=movie&apikey=fb1e84f7&page=3'
    const {data,loading}=useFetch(url)
    const{avatar,avatarloading}=useFetch("https://www.omdbapi.com/?s=avatar&apikey=fb1e84f7&page=1")
  return (
    <div>
      <div className='parent'>
        <div className='main movielist'>
            {avatar.map((m)=>{
              return(
                <Movie {...m} />
              )
            })}
            

            {
              data.map((m)=>{
                return(
                  <Movie {...m} />
                )
              })
            }
        </div>
      </div>
    </div>
  )
}
const Movie=(m)=>{
  return(
    
    <div className='movie'>
              <Link className='linkimg' to={`/moviedetail/${m.imdbID}`}><img src={m.Poster}></img></Link>
              <Link className='linkmovie' to={`/moviedetail/${m.imdbID}`}>
                <div className='movie__title'>
                    {m.Title.slice(0,8)} 
                </div>
                <div className='movie__subtitle'>
                    {m.Year}
                    <div className='movie__type'>
                        {m.Type}
                    </div>
                </div></Link>
            </div>
            
    
  )
}
export default Movielist
