import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './drawer';
import { useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../fetch/useSearch';
import { style } from '@mui/system';
const Header = () => {
    const [showDrawer,setDrawer]=useState(false)
    const [coverBox,setCoverBox]=useState(false)
    const[showSearch,setSearch]=useState(false)
    const [top,setTop]=useState('0')
    const search=document.querySelector(".search")
    const open_search=()=>{
        setTop('150px')
        setSearch(true)
        setCoverBox(true)
        
        
    }
    const close_menu=()=>{
        setDrawer(false)
        setCoverBox(false)
        setSearch(false)
        setTop('0')
    }
    const open_menu=()=>{
        setDrawer(true)
        setCoverBox(true)
    }
  return (
    <div>
        {coverBox?<div className='coverBox' onClick={close_menu}></div>:""}
      <div className='parent header'>
        <div className='main'>
            <div className='header__title'>
                <Link to={'/'}><h1>Pandora Movies</h1></Link>
                <div className='header__headings'>
                    <ul>
                       <Link className='linkheader' to={'/home'}><li>Home</li></Link> 
                        <Link className='linkheader' to={'/movies'}><li>Movies</li></Link>
                        <Link className='linkheader' to={'/series'}><li>Series</li></Link>
                    </ul>
            </div>
            </div>    
            <div className='header__searchbox'>
                <Search__Box showSearch={showSearch} open_search={open_search} close_menu={close_menu} top={top} />
            </div>
            <div className='header__menu'>
                <MenuIcon onClick={open_menu} style={{fontSize:'30px',color:"var(--secondary-color)"}}/>
            </div>
        </div>
      </div>
      <div className='parent header mobileview'>
        <div className='main'>
                    <Search__Box showSearch={showSearch} open_search={open_search} close_menu={close_menu} top={top} />
            
        </div>
      </div>
      {showDrawer?<Drawer/>:""}
    </div>
  )
}
const Search__Box=({showSearch,open_search,close_menu,top})=>{
    const open=()=>{
        open_search()
    }
    const [searchitem,setSearchItem]=useState('')
    const {searchdata}=useSearch(searchitem)
    
    const handelSubmit=(e)=>{
        setSearchItem(e.target.value)
    }
    return(
        <div className='search' style={{top:top}}>
            <div className='search__box'>
                <input type='text' placeholder="Search " className='search__box' onClick={open}
            value={searchitem}
            onChange={handelSubmit} >
            </input>
            <div className='search__btn'><SearchIcon style={{color:"white"}}/></div>
            </div>
            {showSearch?<div className='search__result'>
                {searchdata?searchdata.map((m)=>{
                    return(
                        <Link to={`/moviedetail/${m.imdbID}`} onClick={close_menu}>
                        <div className='search__tiles'>
                    <div className='search__img'>
                        <img src={m.Poster}></img>
                    </div>
                <div className='search__title'>
                    {m.Title.slice(0,8)}
                </div>
                </div>
                        </Link>
                    )
                }):"No movie found"}
            </div>:""}
        </div>
    )
}

export default Header

