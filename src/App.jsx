import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import NewsItem from './components/NewsItem'

function App() {

  const[category,setcategory] = useState("general")

  return (
    <>
      <Nav setcategory={setcategory}/>

      <NewsItem category={category}/>
    </>
  )
}

// 

export default App
