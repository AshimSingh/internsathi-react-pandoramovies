import React from "react";
import {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
export const useDetail=()=>{
    const [data,setData]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        fetchApi()
    },[id])
    const fetchApi=async()=>{
        try{
            const response= await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=fb1e84f7`)
            setData(response.data)
            // console.log(response.data)
        }
        catch(error){
           console.log(error)
        }
    }
    return{
        data
    }
}