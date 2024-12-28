import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Products from './components/Products'

function App() {
  return (
    <div className='w-screen h-screen'>
      <nav className='pt-5 flex justify-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/users'>user</Link>
        <Link to='/products'>product</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </div>
  )
}

export default App