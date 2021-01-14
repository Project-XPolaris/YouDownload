import { useState } from 'react';
import { createModel } from 'hox';
import { DownloadTask } from '../api/task';

export function reduceTorrent(result: DownloadTask[], { statusFilter = 'All' }) {
  result = result.sort((a: DownloadTask, b: DownloadTask) => a.name.localeCompare(b.name));
  if (statusFilter === 'Completed') {
    result = result.filter(it => it.status === 'Completed');
  }
  if (statusFilter === 'Engine') {
    result = result.filter(it => it.status !== 'Completed');
  }
  if (statusFilter === 'Running') {
    result = result.filter(it => it.status === 'Running');
  }
  if (statusFilter === 'Stopped') {
    result = result.filter(it => it.status === 'Stopped');
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
