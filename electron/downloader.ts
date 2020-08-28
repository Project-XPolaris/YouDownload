import { exec, ChildProcess,spawn,execFile } from 'child_process';
import kill from 'tree-kill';
let cp: ChildProcess | undefined = undefined;

export function runDownloader() {
  cp = execFile('C:\\Users\\Takay\\Desktop\\YouDownload\\downloader\\ant.exe', function(err, data) {
    console.log(err);
    console.log(data.toString());
  });
}

export const killDownloader = () => {
  if (cp) {
    console.log(cp.pid)
    console.log("======================== kill downloader ======================")
    kill(cp.pid,'SIGKILL')
  }
};
