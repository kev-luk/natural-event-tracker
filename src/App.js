import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loading from './components/Loading'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, isLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      isLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      isLoading(false)
    }

    fetchEvents()
  }, [])

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        <Map eventData={eventData} />
      </div>
    );
  }
}

export default App;
