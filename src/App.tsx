import React from 'react';
import { render } from 'react-dom';
import BaseLayout from './layouts/Base';
import AppLayout from './layouts/App';
import "./global.css"
const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <>
      <BaseLayout>
        <AppLayout />
      </BaseLayout>
    </>
  )
}

render(<App />, mainElement)
