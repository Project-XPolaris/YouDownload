import apiRequest from './request'
import { TaskEntity } from './entites/task'

export type DownloadTask = {
  id : string
  name : string
  progress: number
  total_size:string
  speed:string
  status:string
  type: 'Torrent' | 'File'
}
export const getAllTasks = async (): Promise<{list:TaskEntity[]}> => {
  return await apiRequest.get('/tasks')
}
