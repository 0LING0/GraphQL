# GraphQL
闲来无事学习了一拨新技术，主要参考文章： https://segmentfault.com/a/1190000012720317
因为文章中有些命令没有更新到最新版，所以直接运行会报错，不过跟着作者的思路一步步来，解决一个个bug，对koa+mongodb+graphql有了一些初步的认识，感觉到了自己的进步。

注意事项：
1.koa搭建框架时如果使用es6语法，需要安装babel
2.启动项目前要把mongodb数据库启动好，数据库的data/db 文件夹要放在根目录，不然会报错。
  启动mongodb要使用管理员身份运行cmd,使用git会报错。
  先开一个cmd，进入mongodb\bin文件夹 mongod --dbpath f:\data\db
  再开一个cmd,进入mongodb文件夹，运行mongo.exe
3.最后npm start 启动项目
  即可~