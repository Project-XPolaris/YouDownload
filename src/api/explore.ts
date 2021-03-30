import apiRequest from './request'

export type FileType = 'File' | 'Directory'

export interface FileItem {
  type: FileType
  name: string
  path: string
}
export type FetchDirectoryContentResponse = {
  path: string
  sep: string
  files:FileItem[]
}
export const fetchDirectoryContent = async (readPath:string | undefined):Promise<FetchDirectoryContentResponse> => {
  return apiRequest.post('/util/readDir', {
    data: { path: readPath }
  })
}
