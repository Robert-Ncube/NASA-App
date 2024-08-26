import { useEffect, useState } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  const [showModel, setShowModel] = useState(false)
  const [data, setDta] = useState(null)
  const [loading, setLoading] = useState(false)

  const toggleModel = () => {
    setShowModel(!showModel)
  }

  useEffect(() => {
    const fetchData = async () => {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setDta(apiData)
        console.log('Fetched from cache today:', apiData)
        return
      }
      localStorage.clear()

      try{
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + NASA_KEY)
        const apiData = await response.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        console.log('Fetched from API:',apiData)
        setDta(apiData)
      }catch(error){
        console.error('Error fetching API Data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {data ? <Main data={data} showModel={showModel}/> : (
        <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>
          <h2>Loading</h2>
        </div>
      )}
      {showModel && 
        <Sidebar data={data} toggleModel={toggleModel}/>
      }
      {data && (
        <Footer data={data} toggleModel={toggleModel}/>
      )}
    </>
  )
}

export default App
