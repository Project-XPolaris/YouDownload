import apiRequest from './request'
import { TaskEntity } from './entites/task'

export const addFileDownloadTask = async (link: string):Promise<TaskEntity> => {
  return await apiRequest.post('/task/download/file', { data: { link } })
}
