import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
// import 

function Newsboard() {

    const[article,setarticle] = useState([])

    // let url = `GET https://newsapi.org/v2/top-headlines?country=us&apiKey=5ef4ce167e5746319bc18d84414d8b65`

    
    useEffect(()=>{
        
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`

        // let url = `GET https://newsapi.org/v2/top-headlines?country=us&apiKey=5ef4ce167e5746319bc18d84414d8b65`

        // fetch(url).then(responce=> responce.json()).then(data=>setarticle(data.articles))

        // fetch(url).then((responce)=> {
        //     responce.json()
        //     .then((data)=>{
        //         setarticle(data.articles)
        //     })
        // })

        const fetchdata =()=>{
            let response = fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5ef4ce167e5746319bc18d84414d8b65")
            let data = response.json()
        }

        fetchdata()

        // console.log(import.meta.env.VITE_API_KEY)

        // const apiKey = import.meta.env.VITE_API_KEY
        // console.log(apiKey);

    },[])

  return (
    <div>
        <h1 className='text-center'>latest <span className='badge bg-danger'>News</span></h1>

        {
            article.map((news,index)=>{
                return <NewsItem key={index} news={news}/>
            })
        }
    </div>
  )
}

export default Newsboard