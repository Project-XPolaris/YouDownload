import apiRequest from './request';
import { TorrentEntity } from './entites/TorrentEntity';

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

export const addTorrentFile = async (torrentFile:File) => {
  const requestForm = new FormData()
  requestForm.append("oneTorrentFile",torrentFile)
  return await apiRequest.post('/torrent/addOneFile', {
    data: requestForm,
  });
}

export const deleteTorrent = async(hexString:string) => {
  const requestForm = new FormData();
  requestForm.append('hexString', hexString);
  return await apiRequest.post('/torrent/delOne', {
    data: requestForm,
  });
}