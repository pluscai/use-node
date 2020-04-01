// 接收命令行参数，根据该目录，读取目录下的所有文件并输出（遍历文件夹）
const path = require('path');
const fs = require('fs');

// 1: 接收命令行参数  node ./01_read_dir_files.js .//xxx//xxx//xx
// 2: 修正该路径 path.resolve(process.agrv[2]);
let inputPath = path.resolve(process.argv[2]);
testReadFiles(inputPath);
// 3: 判断该路径是否存在 fs.access(fs.constants.F_OK)
function testReadFiles(dir) {
    try {
        fs.accessSync(dir,fs.constants.F_OK);
        let state = fs.statSync(dir);
        if(state.isFile()) {
            console.log(dir);
        }else if(state.isDirectory()){
            let files = fs.readdirSync(dir);

            files.forEach(file => {
                testReadFiles(path.join(dir,file));
            })
        }
    }catch (e) {
        console.log(e);
        console.log('该文件或文件夹不存在')
    }
}