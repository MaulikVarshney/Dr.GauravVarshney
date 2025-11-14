import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Profile from './pages/Profile'
import Videos from './pages/Videos'

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-white'>
      <nav className='sticky top-0 z-10 bg-gray-50 shadow-sm'>
        <div className='max-w-4xl mx-auto px-4 py-3 flex items-center justify-between'>
          <div className='text-lg font-semibold'>My Site</div>
          <div className='space-x-4'>
            <Link to='/' className='hover:text-blue-600'>Profile</Link>
            <Link to='/videos' className='hover:text-blue-600'>Videos</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/videos' element={<Videos />} />
      </Routes>
    </div>
  )
}

export default App
