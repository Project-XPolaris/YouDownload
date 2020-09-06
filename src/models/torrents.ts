import { useState } from 'react';
import { createModel } from 'hox';
import { getAllTorrent } from '../api/torrent';
import { TorrentEntity } from '../api/entites/TorrentEntity';

export function reduceTorrent(result: TorrentEntity[], { statusFilter = 'All' }) {
  result = result.sort((a: TorrentEntity, b: TorrentEntity) => a.TorrentName.localeCompare(b.TorrentName));
  if (statusFilter === 'Completed') {
    result = result.filter(it => it.Status === 'Completed');
  }
  if (statusFilter === 'Engine') {
    result = result.filter(it => it.Status !== 'Completed');
  }
  if (statusFilter === 'Running') {
    result = result.filter(it => it.Status === 'Running');
  }
  if (statusFilter === 'Stopped') {
    result = result.filter(it => it.Status === 'Stopped');
  }
  return result
}

function useTorrentModel() {
  const [sortKey, setSortKey] = useState<string>('name');
  const [statusFilter, setStatusFilter] = useState<string | undefined>('Engine');
  const [displayTorrent, setDisplayTorrent] = useState<string | undefined>(undefined);
  return {
    setStatusFilter,
    setDisplayTorrent,
    displayTorrent,
    statusFilter
  };
}

export default createModel(useTorrentModel);
