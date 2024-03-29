import { FileEntity } from './FileEntity'

export interface TorrentEntity {
  TorrentName: string
  TotalLength: string
  Status: string
  Percentage: number
  DownloadSpeed: string
  LeftTime: string
  HexString: string
  Files: FileEntity[]
}
