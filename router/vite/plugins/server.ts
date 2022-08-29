export default {
    
      proxy: {
        // 字符串简写写法
        '/api': 'http://127.0.0.1:5173/api',
        // 选项写法
    //     '/api': {
    //       target: 'http://localhost:5173',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
       
    //   }
    }
  
}