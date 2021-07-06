import * as React from 'react'
import { ReactElement, useState } from 'react'
import SubPanel from '../../layouts/App/parts/Sub'
import HomeSubPanel from './sub'
import HomePage from './index'
import { TaskEntity } from '../../api/entites/task'

const HomePageWrap = ({ }):ReactElement => {
  const [task,setTask] = useState<TaskEntity>()
  return (
    <div>
      <SubPanel>
        <HomeSubPanel onTaskClick={(task) => setTask(task)}/>
      </SubPanel>
      <HomePage task={task}/>
    </div>
  )
}

export default HomePageWrap
