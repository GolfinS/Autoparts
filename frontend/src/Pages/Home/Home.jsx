import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import PartsDisplay from '../../components/PartsDisplay/PartsDisplay'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <PartsDisplay category={category}/>
    </>
  )
}

export default Home
