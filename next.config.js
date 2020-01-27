const withOffline = require("next-offline");
const path = require("path");

const nextConfig = {
  experimental: {
    modern: true,
    granularChunks: true
  },
  dontAutoRegisterSw: false,
  target: "serverless",
  workboxOpts: {
    //swDest: "service-worker.js",
    swDest: path.join(__dirname, "public/service-worker.js"),
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
        handler: "CacheFirst",

        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 30
          }
        }
      },
      {
        urlPattern: /\.(?:js)$/,
        handler: "NetworkFirst",

        options: {
          cacheName: "javascript",
          expiration: {
            maxEntries: 30
          }
        }
      },
      {
        urlPattern: /^https:\/\/www.swdestiny.net\/?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200
          }
        }
      },
      {
        urlPattern: /^https:\/\/swdestiny.net\/?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  }
};
module.exports = withOffline(nextConfig);
