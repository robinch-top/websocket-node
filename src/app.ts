import  show from "./utils/logger"
import {loggerInit }from './utils/logger'
namespace app{
    export class main{
        constructor(){
            loggerInit()
            show('测试输出')
        }
    }
}
new app.main()