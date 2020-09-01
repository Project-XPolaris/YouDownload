import useStyles from "./style"
import React from "react"
import DownloadTaskItem from "../../../components/DownloadTaskItem"
import useTorrentModel from "../../../models/torrents"
import useDialogsModel from "../../../models/dialogs"
import { deleteTorrent, startDownload, stopDownload } from "../../../api/torrent"
export interface HomeSubPanelPropsTypes {

}
const HomeSubPanel = ({ }: HomeSubPanelPropsTypes) => {
    const classes = useStyles()
    const torrentModel = useTorrentModel()
    const dialogsModel = useDialogsModel()
    return (
        <div className={classes.root}>
            {
                torrentModel.torrents.map((torrent, idx) => (
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
                        status={torrent.Status}
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