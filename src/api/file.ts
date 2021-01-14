import apiRequest from './request';

export const addFileDownloadTask = async (link: string, dest: string) => {
  return await apiRequest.post('/file/task', { data: { link, dest } });
};

export const startFileDownload = async(id:string) => {
  return await apiRequest.post("/file/start",{data:{id}})
}

export const stopFileDownload = async(id:string) => {
  return await apiRequest.post("/file/pause",{data:{id}})
}

export const deleteFileDownload = async(id:string) => {
  return await apiRequest.post("/file/delete",{data:{id}})
}
