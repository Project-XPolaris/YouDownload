import * as React from 'react'
import { ReactElement } from 'react'
import SubPanel from '../../layouts/App/parts/Sub'
import HomeSubPanel from './sub'
import HomePage from './index'

const HomePageWrap = ({ }):ReactElement => {
  return (
    <div>
      <SubPanel>
        <HomeSubPanel/>
      </SubPanel>
      <HomePage torrent={undefined}/>
    </div>
  )
}

export default HomePageWrap
