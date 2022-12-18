import React from "react";
import {useState,useEffect} from 'react'
import axios from "axios";
export const useFetch=(url)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [avatar,setAvatar]=useState([])
    useEffect(()=>{
        fetch()
    },[])
    const fetch=async()=>{
    try{
       const resp=await axios.get(url)
       if(url==="https://www.omdbapi.com/?s=avatar&apikey=fb1e84f7&page=1"){
        setAvatar(resp.data.Search)
        setLoading(false)
       }
       else{
        setData(resp.data.Search)
        setLoading(false)
       }

    }
    catch(error){
        console.log(error)
    }
    }
   if(url==="https://www.omdbapi.com/?s=avatar&apikey=fb1e84f7&page=1"){
     return{
        avatar,loading
    }
   }
   else{
    return{
        data,loading
    }
   }
}
