import * as fs from 'fs'
import * as path from 'path'
import * as config from "../config"
let sws: fs.WriteStream;
let ews: fs.WriteStream;
let ative: boolean = false;
export function loggerInit() {
    if (!config.fileLogActive) return;
    let now = new Date();
    let log_file_name = path.join(config.home_dir, `/log/success/${now.getFullYear()}${now.getMonth()}${now.getDate()}`)
    let err_file_name = path.join(config.home_dir, `/log/error/${now.getFullYear()}${now.getMonth()}${now.getDate()}`)
    sws = fs.createWriteStream(log_file_name, { flags: 'a' })
    ews = fs.createWriteStream(err_file_name, { flags: 'a' })
    ative = true;
}
export default function show(text: string, ative: boolean = true): void {
    if (!config.logActive) return;
    let now = new Date();
    let prefix = ative ? 'success' : 'error';
    let showText = prefix + "---" + now.toLocaleString() + "===>" + text
    if (config.fileLogActive && ative) {
        wfile(showText + '\n', ative)
    }
    console.log(showText);
}
function wfile(text: string, ative: boolean = true): void {
    if (ative) {
        sws.write(text)
    } else {
        ews.write(text)
    }
}