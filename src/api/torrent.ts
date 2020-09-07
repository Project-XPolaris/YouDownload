import apiRequest from './request';
import { TorrentEntity } from './entites/TorrentEntity';
import { ConfigEntity } from './entites/ConfigEntity';

export const getAllTorrent = async (): Promise<TorrentEntity[]> => {
  return await apiRequest.get('/torrent/getAllTorrents');
};

export const startDownload = async (hexString: string) => {
  const requestForm = new FormData();
  requestForm.append('hexString', hexString);
  return await apiRequest.post('/torrent/startDownload', {
    data: requestForm,
  });
};

export const stopDownload = async (hexString: string) => {
  const requestForm = new FormData();
  requestForm.append('hexString', hexString);
  return await apiRequest.post('/torrent/stopDownload', {
    data: requestForm,
  });
};

export const addMargaretLink = async (linkAddress: string) => {
  const requestForm = new FormData();
  requestForm.append('linkAddress', linkAddress);
  return await apiRequest.post('/magnet/addOneMagent', {
    data: requestForm,
  });
};

export const addTorrentFile = async (torrentFile: File) => {
  const requestForm = new FormData()
  requestForm.append("oneTorrentFile", torrentFile)
  return await apiRequest.post('/torrent/addOneFile', {
    data: requestForm,
  });
}

export const deleteTorrent = async (hexString: string) => {
  const requestForm = new FormData();
  requestForm.append('hexString', hexString);
  return await apiRequest.post('/torrent/delOne', {
    data: requestForm,
  });
}

export const changeFilePriority = async (hexString: string, path: string, level: number) => {
  const requestForm = new FormData();
  requestForm.append('hexString', hexString);
  requestForm.append('filePath', path)
  requestForm.append('level', level.toString())
  return await apiRequest.post('/torrent/setFilePriority', {
    data: requestForm,
  });
}

export const getSetting = async (): Promise<ConfigEntity> => {
  return await apiRequest.get('/settings/config', {});
}