import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})

test('search form could be used', async () => {
  render(<App />)
  const value = 'Matrix'

  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, {
    target: { value }
  })
  fireEvent.click(button)

  const title = await screen.findByText(value)
  expect(title).toBeVisible()
})

test('renders without crashing', async () => {
  render(<App />)
  const title = await screen.findByText(/Última búsqueda/i)
  expect(title).toBeInTheDocument()
})
