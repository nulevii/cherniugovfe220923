import React from 'react'
import './App.css'
import BarChart from './components/BarChart'

const App: React.FC = () => {
  return (
      <section className='chart-section'>
      <h1 className='chart-sign'>SPENT TIME (SECONDS)</h1>
      <BarChart />
      </section>
  )
}

export default App
