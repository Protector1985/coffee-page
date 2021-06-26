import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'

import '@testing-library/jest-dom/extend-expect'

import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { App, DisplayLocation } from './app'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )

  expect(screen.getByText("Great coffee made simple.", {exact:true})).toBeInTheDocument()

  const leftClick = { button: 0 }

  userEvent.click(screen.getByText("ABOUT", {exact:false}), leftClick)

  expect(screen.getByText("Our commitment", {exact: false})).toBeInTheDocument();

})
