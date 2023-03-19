import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {

  return (
    <>
      <header className='header'>
        <div className="wrapper">
          <h1 className="logo">
            <Link to='/'>react axios CRUD</Link>
          </h1>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Home