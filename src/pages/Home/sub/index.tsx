import useStyles from "./style"
import React from "react"
import DownloadTaskItem from "../../../components/DownloadTaskItem"
import useTorrentModel from "../../../models/torrents"
import useDialogsModel from "../../../models/dialogs"
import { deleteTorrent, startDownload, stopDownload } from "../../../api/torrent"
import { TorrentEntity } from '../../../api/entites/TorrentEntity';
import { DownloadTask } from '../../../api/task';
import { startFileDownload, stopFileDownload } from '../../../api/file';
export interface HomeSubPanelPropsTypes {
    tasks?:DownloadTask[]
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
                        title={torrent.name}
                        progress={torrent.progress}
                        onStart={() => {
                            if (torrent.type === "Torrent") {
                                startDownload(torrent.id)
                            }
                            if (torrent.type === "File") {
                                startFileDownload(torrent.id)
                            }

                        }}
                        onPause={() => {
                            if (torrent.type === "Torrent") {
                                stopDownload(torrent.id)
                            }
                            if (torrent.type === "File") {
                                stopFileDownload(torrent.id)
                            }
                        }}
                        onClick={() => torrentModel.setDisplayTorrent(torrent.id)}
                        size={torrent.total_size}
                        status={torrent.status}
                        speed={torrent.speed}
                        onDelete={() => {
                            dialogsModel.showConfirmDialog({
                                title: "删除确认",
                                content: "是否删除任务？",
                                onOk: () => {
                                    deleteTorrent(torrent.id)
                                }
                            })
                        }}
                        type={torrent.type}
                    />
                ))
            }

        </div>
    )
}

export default HomeSubPanel
