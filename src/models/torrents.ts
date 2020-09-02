import { useState } from "react";
import { createModel } from "hox";
import { getAllTorrent } from '../api/torrent';
import { TorrentEntity } from '../api/entites/TorrentEntity';

function useTorrentModel() {
  const [torrents,setTorrents] = useState<TorrentEntity[]>([])
  const [sortKey,setSortKey] = useState<string>("name")
  const [statusFilter,setStatusFilter] = useState<string | undefined>("Running")
  const [displayTorrent,setDisplayTorrent] = useState<TorrentEntity | undefined>(undefined)
  const loadAllTask = async () => {
    let result = await getAllTorrent()
    result = result.sort((a:TorrentEntity,b:TorrentEntity) => a.TorrentName.localeCompare(b.TorrentName))
    if (statusFilter === "Completed"){
      result = result.filter(it => it.Status === "Completed")
    }
    if (statusFilter === "Running") {
      result = result.filter(it => it.Status === "Running")
    }
    if (statusFilter === "Stopped") {
      result = result.filter(it => it.Status === "Stopped")
    }
    setTorrents(result)
    if (displayTorrent){
      const target : TorrentEntity | undefined = result.find(it => it.HexString === displayTorrent.HexString)
      if (target){
        setDisplayTorrent(target)
      }
    }
  }

  return {
   torrents,
    loadAllTask,
    setStatusFilter,
    setDisplayTorrent,
    displayTorrent
  };
}

export default createModel(useTorrentModel);
