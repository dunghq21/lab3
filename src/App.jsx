import { data } from './data'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import DetailComponents from './components/DetailComponents'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <div className={theme ? 'bg-white' : 'bg-black/60'}>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Card data={data} theme={theme} />} />
        <Route path='/cardDetail/:id' element={<DetailComponents data={data} theme={theme} />} />
        <Route path='/contact' element={<Contact theme={theme} />} />
      </Routes>
      <Footer theme={theme} />
    </div>
  )
}

export default App
