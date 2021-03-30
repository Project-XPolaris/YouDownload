import { useState } from 'react'
import { createModel } from 'hox'

function useLayoutModel () {
  const [activeNav, setActiveNav] = useState('Engine')
  return {
    activeNav,
    setActiveNav
  }
}

export default createModel(useLayoutModel)
