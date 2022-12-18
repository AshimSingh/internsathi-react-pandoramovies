import React from "react";
import {useState,useEffect} from 'react'
import axios from 'axios'
export const useSearch=(search)=>{
    const [searchdata,setSearchData]=useState([])
     useEffect(()=>{
        fetchApi()
    },[search])
    const fetchApi=async()=>{
        try{
            if(search.length>3){
                const response= await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=fb1e84f7`)
            setSearchData(response.data.Search)
            }
            else{
                const response= await axios.get(`https://www.omdbapi.com/?s=avatar&apikey=fb1e84f7&page=1`)
            setSearchData(response.data.Search)
            }
            
        }
        catch(error){
           console.log(error)
        }
    }
    return{
        searchdata
    }
}