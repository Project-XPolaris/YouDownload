import { useState } from "react";
import { createModel } from "hox";
import { getAllTorrent } from '../api/torrent';
import { TorrentEntity } from '../api/entites/TorrentEntity';

function useTorrentModel() {
  const [torrents,setTorrents] = useState<TorrentEntity[]>([])
  const [sortKey,setSortKey] = useState<string>("name")
  const loadAllTask = async () => {
    let result = await getAllTorrent()
    result = result.sort((a:TorrentEntity,b:TorrentEntity) => a.TorrentName.localeCompare(b.TorrentName))
    setTorrents(result)
  }
  return {
   torrents,
    loadAllTask
  };
}

export default createModel(useTorrentModel);
