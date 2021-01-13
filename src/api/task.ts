import apiRequest from './request';
export type DownloadTask = {
  id : string
  name : string
  progress: number
  total_size:string
  speed:string
  status:string
  type: "Torrent" | "File"
}
export const getAllTasks = async (): Promise<{tasks:DownloadTask[]}> => {
  return await apiRequest.get("/tasks")
}
