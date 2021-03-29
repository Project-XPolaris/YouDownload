import apiRequest from './request'
import { TorrentEntity } from './entites/TorrentEntity'
import { ConfigEntity } from './entites/ConfigEntity'
import { TaskEntity } from './entites/task'

export const getAllTorrent = async (): Promise<TorrentEntity[]> => {
  return await apiRequest.get('/torrent/getAllTorrents')
}

export const startDownload = async (id: string) => {
  return await apiRequest.post('/task/start', {
    params: { id }
  })
}

export const stopDownload = async (id: string) => {
  return await apiRequest.post('/task/stop', {
    params: { id }
  })
}

export const addMargaretLink = async (link: string):Promise<TaskEntity> => {
  return await apiRequest.post('/task/magnet', {
    data: { link }
  })
}

export const addTorrentFile = async (torrentFile: File):Promise<TaskEntity> => {
  const requestForm = new FormData()
  requestForm.append('file', torrentFile)
  return await apiRequest.post('/task/file', {
    data: requestForm
  })
}

export const deleteTask = async (id: string) => {
  return await apiRequest.post('/task/delete', {
    params: { id }
  })
}

export const changeFilePriority = async (hexString: string, path: string, level: number) => {
  const requestForm = new FormData()
  requestForm.append('hexString', hexString)
  requestForm.append('filePath', path)
  requestForm.append('level', level.toString())
  return await apiRequest.post('/torrent/setFilePriority', {
    data: requestForm
  })
}

export const getSetting = async (): Promise<ConfigEntity> => {
  return await apiRequest.get('/torrent/setting', {})
}
