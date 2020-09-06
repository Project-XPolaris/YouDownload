import useStyles from "./style"
import React from "react"
import DownloadTaskItem from "../../../components/DownloadTaskItem"
import useTorrentModel from "../../../models/torrents"
import useDialogsModel from "../../../models/dialogs"
import { deleteTorrent, startDownload, stopDownload } from "../../../api/torrent"
import { TorrentEntity } from '../../../api/entites/TorrentEntity';
export interface HomeSubPanelPropsTypes {
    tasks?:TorrentEntity[]
}
const HomeSubPanel = ({ tasks = []}: HomeSubPanelPropsTypes) => {
    const classes = useStyles()
    const torrentModel = useTorrentModel()
    const dialogsModel = useDialogsModel()
    return (
        <div className={classes.root}>
            {
                tasks.map((torrent, idx) => (
                    <DownloadTaskItem
                        key={idx}
                        title={torrent.TorrentName}
                        progress={torrent.Percentage}
                        onStart={() => {
                            startDownload(torrent.HexString)
                        }}
                        onPause={() => {
                            stopDownload(torrent.HexString)
                        }}
                        onClick={() => torrentModel.setDisplayTorrent(torrent.HexString)}
                        size={torrent.TotalLength}
                        status={torrent.Status}
                        speed={torrent.DownloadSpeed}
                        onDelete={() => {
                            dialogsModel.showConfirmDialog({
                                title: "删除确认",
                                content: "是否删除任务？",
                                onOk: () => {
                                    deleteTorrent(torrent.HexString)
                                }
                            })
                        }}
                    />
                ))
            }

        </div>
    )
}

export default HomeSubPanel
