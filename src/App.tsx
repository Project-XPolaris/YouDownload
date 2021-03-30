import React from 'react'
import { render } from 'react-dom'
import BaseLayout from './layouts/Base'
import './global.css'
import AppRouter from './layouts/Router'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <BaseLayout>
        <AppRouter />
      </BaseLayout>
    </>
  )
}

render(<App />, mainElement)
