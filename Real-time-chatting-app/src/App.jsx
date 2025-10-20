import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate1'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/profile' element={<ProfileUpdate />} />
    </Routes>
  )
}

export default App
