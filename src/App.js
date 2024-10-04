import React, { useState } from 'react'
import Navbar from './components/navbar'
import Newsboard from './components/newsboard'
function App() {
  const[category,setCategory] =useState("general");
  return (
    <div>
    <Navbar setCategory={setCategory}/>
    <Newsboard category={category}/>
    </div>
  )
}

export default App
