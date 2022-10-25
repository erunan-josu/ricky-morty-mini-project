import { useState, useEffect } from 'react'
import { Card } from './components/Card/Card'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    ;(async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      )

      setList(data.results)
    })()
  }, [])
  return (
    <div className="App">
      <Header />
      <Main list={list} />
      <Footer />
    </div>
  )
}

export default App
