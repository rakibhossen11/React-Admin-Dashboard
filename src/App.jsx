import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './component/sidebar/Sidebar'
import MainDash from './component/MainDash/MainDash'
import RightSide from './component/RightSide/RightSide'

function App() {

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  )
}

export default App
