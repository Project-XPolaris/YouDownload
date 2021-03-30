import { createModel } from 'hox'
import { useInterval } from 'ahooks'
import { getAllTasks } from '../api/task'
import { useState } from 'react'
import { TaskEntity } from '../api/entites/task'

export const reduceTask = (result: TaskEntity[], { statusFilter = 'All' }:{ statusFilter:string }) => {
  if (result === undefined) {
    return []
  }
  result = result.sort((a: TaskEntity, b: TaskEntity) => a.name.localeCompare(b.name))
  if (statusFilter === 'Completed') {
    result = result.filter(it => it.status === 'Complete')
  }
  if (statusFilter === 'Engine') {
    result = result.filter(it => it.status !== 'Complete')
  }
  if (statusFilter === 'Running') {
    result = result.filter(it => it.status === 'Downloading')
  }
  if (statusFilter === 'Stopped') {
    result = result.filter(it => it.status === 'Stop')
  }
  return result
}
const TaskModel = () => {
  const [tasks, setTasks] = useState<TaskEntity[]>([])
  const [statusFilter, setStatusFilter] = useState<string>('Engine')
  useInterval(async () => {
    const response = await getAllTasks()
    setTasks(response.list)
  }, 1000)
  const getTasks = () => {
    return reduceTask(tasks, { statusFilter })
  }
  return {
    tasks, getTasks, setStatusFilter
  }
}
const useTaskModel = createModel(TaskModel)
export default useTaskModel
