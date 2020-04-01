const jq = require('jquery');

// 获取加载机制中某个包的入口
console.log(require.resolve('jquery'));
// D:\csx\learn-node\code\test_package_entry\node_modules\_jquery@3.4.1@jquery\dist\jquery.js

console.log(jq);
// [Function]