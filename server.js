const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static('build'));

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://musicapi.x007.workers.dev',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/search',
    },
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
