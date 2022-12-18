import React from 'react'
import { useDetail } from '../fetch/useDetail'
import './movieDetail.css'
const MovieDetail = () => {
    const {data}=useDetail()
  return (
    <div>
      <div>
      <div className='parent'>
        <div className='main moviedetail'>
            <div className='image'>
                <img src={data.Poster}></img>
            </div>
            <div className='Description'>
                <div className='movie__name'>
                    {data.Title}
                </div>
                <div className='title'>
                    Genre
                </div>
                <div className='sub__title'>
                        {data.Genre}
                </div>
                <div className='title'>
                    Year
                </div>
                <div className='sub__title'>
                        {data.Year}
                </div>
                <div className='title'>
                    Director
                </div>
                <div className='sub__title'>
                        {data.Director}
                </div>
                <div className='title'>
                    Writer
                </div>
                <div className='sub__title'>
                        {data.Writer}
                </div>
                <div className='title'>
                    Actors
                </div>
                <div className='sub__title'>
                        {data.Actors}
                </div>
                <div className='title'>
                    Awards
                </div>
                <div className='sub__title'>
                        {data.Awards}
                </div>
                <div className='title'>
                    Language
                </div>
                <div className='sub__title'>
                        {data.Language}
                </div>
                <div className='title'>
                    Plot
                </div>
                <div className='sub__title'>
                        {data.Plot}
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MovieDetail
