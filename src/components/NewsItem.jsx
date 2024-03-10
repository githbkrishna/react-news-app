import React, { useEffect, useState } from 'react'
import '../App.css'
import newsimg from '../assets/news.jpg'

function NewsItem({ category }) {
    const[mynews,setmynews]= useState([])
    const fetchdata =async ()=>{
        // let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5ef4ce167e5746319bc18d84414d8b65")
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5ef4ce167e5746319bc18d84414d8b65`)
        let data = await response.json()
        // console.log(data.articles);
        setmynews(data.articles);
    }
    console.log(mynews);
    
    useEffect(()=>{    
        fetchdata()
    },[category])       

  return (
    <div className='container'>
    {
        mynews.map((ele)=>{
            return(
                <div className="card" style={{width: "350px", height: "400px"}}>
                    <img src={ele.urlToImage == null ? newsimg : ele.urlToImage } className="card-img-top"  style={{width: "350px", height: "200px"}} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{ele.author == null ? "Ed Cara" : ele.author}</h5>
                        <p className="card-text">{ele.title}</p>
                        <a href={ele.url} target='_blank' className="btn btn-primary">Read more</a>
                    </div>
                </div>
            )
        })
    }
    </div>
  )
}

export default NewsItem