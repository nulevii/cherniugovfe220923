import { render, screen } from '@testing-library/react'
import App from '../App'
import { CHART_DATA } from '../data'

describe('renders App properly', () => {
  it('check initial values', () => {
    render(<App />)
    CHART_DATA.forEach(datum => {
      const initialTime = screen.getByText(datum.time)
      expect(initialTime).toBeInTheDocument()
    })
  })
  it('should renader chart header', () => {
    render(<App />)
    const chartHeader = screen.getByText('SPENT TIME (SECONDS)')
    expect(chartHeader).toBeInTheDocument()
  })

  it('should render button', () => {
    render(<App />)
    const updateButton = screen.getByTestId('update-button')
    expect(updateButton).toBeInTheDocument()
  })

  it('should render each item of CHART_DATA', () => {
    render(<App />)

    CHART_DATA.forEach(({ name }) => {
      const chartItem = screen.getByText(name)
      expect(chartItem).toBeInTheDocument()
    })
  })
})
