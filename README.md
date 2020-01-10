# xxl_server
消消乐服务端，仅用来存储最高分排行榜数据

## 环境版本
- Nodejs 8.11.3 或以上
- mysql 5.7.x 或以上 （选用） 如不用在项目的配置文件里面更改即可使用内存临时存储最高分

## 部署
* 还原数据库文件 sql/xxl.sql， 更改配置config/*.js(如不用数据库 代码处改为 exports.useMysql = false)
* 运行 npm install 安装依赖库
* 运行 npm run dev 启动服务器