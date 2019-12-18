module.exports = {
  publicPath: './',             // 根目录
  outputDir: './dist',           // 构建输出目录
  assetsDir: 'assets',         // 静态资源目目录
  lintOnSave: false,           // 是否开启eslint保存检测
  indexPath: 'index.html',     // 设置输出的首页的名字
  devServer: {
    open: false,             // 是否自动打开首页文件
    host: '0.0.0.0',   // 设置主机的地址
    port: '8082',           //端口
    //配置跨域
    // proxy:{
    //   '':{
    //     target:'http://127.0.0.1:3000/',
    //     changeOrigin:true
    //   },
    
     
    // }
  },

  

}


// module.exports = {
//     // ...other vue-cli plugin options...
//     pwa: {
//       name: 'My App',
//       themeColor: '#4DBA87',
//       msTileColor: '#000000',
//       appleMobileWebAppCapable: 'yes',
//       appleMobileWebAppStatusBarStyle: 'black',
  
//       // configure the workbox plugin
//       workboxPluginMode: 'InjectManifest',
//       workboxOptions: {
//         // swSrc is required in InjectManifest mode.
//         swSrc: 'dev/service-worker.js',
//         // ...other Workbox options...
//       }
//     }
//   }