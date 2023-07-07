const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://musicapi.x007.workers.dev/search",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
