const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/Home', { 
  	target: 'http://article.m.yiguo.com', 
  	changeOrigin:true
  }));
  app.use(proxy('/Category', { 
  	target: 'http://article.m.yiguo.com', 
  	changeOrigin:true
  }));
  
};