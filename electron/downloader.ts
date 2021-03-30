import { ChildProcess, execFile } from 'child_process'
import kill from 'tree-kill'

let cp: ChildProcess | undefined

export const runDownloader = () => {
  cp = execFile('./ant.exe', function (err, data) {
    console.log(err)
    console.log(data.toString())
  })
}

export const killDownloader = () => {
  if (cp) {
    console.log(cp.pid)
    console.log('======================== kill downloader ======================')
    kill(cp.pid, 'SIGKILL')
  }
}
