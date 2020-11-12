import * as mongoose from 'mongoose'
import * as config from "../config"
import show from "./logger"

let options = {
    autoReconnect: true
}

export default function mongoInit() {
    mongoose.connect(config.mongodb, options)
    let db = mongoose.connection
    db.on('error', console.error.bind(console, '连接错误:'));
    db.once('open', () => {
        show('mongodb connect suucess');
    })
}
