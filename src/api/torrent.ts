import apiRequest from './request';
import { TorrentEntity } from './entites/TorrentEntity';
import { ConfigEntity } from './entites/ConfigEntity';

export const getAllTorrent = async (): Promise<TorrentEntity[]> => {
  return await apiRequest.get('/torrent/getAllTorrents');
};

export const startDownload = async (id: string) => {
  return await apiRequest.post('/torrent/start', {
    data: { id },
  });
};

export const stopDownload = async (id: string) => {
  return await apiRequest.post('/torrent/stop', {
    data: { id },
  });
};

export const addMargaretLink = async (link: string) => {
  return await apiRequest.post('/torrent/magnet', {
    data: { link },
  });
};

export const addTorrentFile = async (torrentFile: File) => {
  const requestForm = new FormData()
  requestForm.append("oneTorrentFile", torrentFile)
  return await apiRequest.post('/torrent/file', {
    data: requestForm,
  });
}

export const deleteTorrent = async (hexString: string) => {
  return await apiRequest.post('/torrent/del', {
    data: { id:hexString},
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
