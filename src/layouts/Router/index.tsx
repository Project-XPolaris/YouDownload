import React, { ReactElement } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SubPanel from '../App/parts/Sub'
import HomePageWrap from '../../pages/Home/wrap'
import SettingsSubPanel from '../../pages/Settings/sub'
import SettingsPage from '../../pages/Settings'
import InitPage from '../../pages/Init'
import EmptyLayout from '../Empty'
import AppLayout from '../App'

export interface AppRouterPropsType {

}

const AppRouter = ({}: AppRouterPropsType):ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path='/settings'>
          <AppLayout>
            <>
              <SubPanel>
                <SettingsSubPanel />
              </SubPanel>
              <SettingsPage />
            </>
          </AppLayout>
        </Route>
        <Route path='/home'>
          <AppLayout>
            <>
              <HomePageWrap />
            </>
          </AppLayout>
        </Route>
        <Route path='/init'>
          <EmptyLayout>
            <InitPage />
          </EmptyLayout>
        </Route>
      </Switch>
    </Router>

  )
}

export default AppRouter
