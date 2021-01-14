import * as React from 'react';
import SubPanel from '../../layouts/App/parts/Sub';
import HomeSubPanel from './sub';
import HomePage from './index';
import { useRequest } from 'ahooks';
import { getAllTorrent } from '../../api/torrent';
import useTorrentModel, { reduceTorrent } from '../../models/torrents';
import { TorrentEntity } from '../../api/entites/TorrentEntity';
import { DownloadTask, getAllTasks } from '../../api/task';

const HomePageWrap = ({ }) => {
  const torrentModel = useTorrentModel();

  const { data }: { data: any } = useRequest(getAllTasks, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
    manual: false,
  });
  console.log(data)
  let result = undefined
  let displayTorrent = undefined
  if (data?.tasks) {
    result = reduceTorrent(data?.tasks, { statusFilter: torrentModel.statusFilter });
    displayTorrent = data?.tasks.find((it: DownloadTask) => it.id === torrentModel.displayTorrent)
  }

  return (
    <div>
      <SubPanel>
        <HomeSubPanel tasks={result} />
      </SubPanel>
      <HomePage torrent={displayTorrent}/>
    </div>
  );
};

export default HomePageWrap;
