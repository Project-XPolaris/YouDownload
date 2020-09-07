import * as React from 'react';
import SubPanel from '../../layouts/App/parts/Sub';
import HomeSubPanel from './sub';
import HomePage from './index';
import { useRequest } from 'ahooks';
import { getAllTorrent } from '../../api/torrent';
import useTorrentModel, { reduceTorrent } from '../../models/torrents';
import { TorrentEntity } from '../../api/entites/TorrentEntity';

const HomePageWrap = ({ }) => {
  const torrentModel = useTorrentModel();

  const { data }: { data: any } = useRequest(getAllTorrent, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
    manual: false,
  });
  let result = undefined
  let displayTorrent = undefined
  if (data) {
    result = reduceTorrent(data, { statusFilter: torrentModel.statusFilter });
    displayTorrent = data.find((it: TorrentEntity) => it.HexString === torrentModel.displayTorrent)
  }

  return (
    <div>
      <SubPanel>
        <HomeSubPanel tasks={result} />
      </SubPanel>
      <HomePage torrent={displayTorrent} />
    </div>
  );
};

export default HomePageWrap;
