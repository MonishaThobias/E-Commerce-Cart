import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <>
      <Header />
      
      <div className="container">
        <div className="card bg-info py-5 w-50 mx-auto text-center" style={{marginTop:"15%"}}>
            <h1 className="card-title">E-Commerce Website</h1>
        </div>
      </div>
    </>
  )
}

export default Home
