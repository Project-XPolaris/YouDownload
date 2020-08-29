import { useState } from "react";
import { createModel } from "hox";
import { getAllTorrent } from '../api/torrent';
import { TorrentEntity } from '../api/entites/TorrentEntity';

function useLayoutModel() {
  const [activeNav,setActiveNav] = useState("Running")
  return {
    activeNav,
    setActiveNav
  };
}

export default createModel(useLayoutModel);
