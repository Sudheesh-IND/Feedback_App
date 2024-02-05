import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Suggestions from './Pages/Suggestions'
import EachFeedback from './Pages/EachFeedback'
import AddFeedback from './Pages/AddFeedback'
import EditFeedback from './Pages/EditFeedback'

function App() {
  

  return (
    <>

    <Routes>
      <Route path='' element={<Suggestions/>}/>
      <Route path='feedback/:id' element={<EachFeedback/>}/>
      <Route path='addfeedback' element={<AddFeedback/>}/>
      <Route path='editfeedback/:id' element={<EditFeedback/>}/>
    </Routes>
     
    </>
  )
}

export default App
