const withOffline = require("next-offline");
const path = require("path");

const nextConfig = {
  webpack5: true,
  experimental: {
    modern: true,
    granularChunks: true
  },
  reactStrictMode: true,
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
  },
  async redirects() {
    return [
      // {
      //   source: `/blog/2019/12/2/add-rss-feed-to-nextjs`,
      //   destination: "/blog/2019/12/2/how-to-add-an-rss-feed-to-your-next-js-site",
      //   permanent: true,
      // },
    ];
  }
};
module.exports = withOffline(nextConfig);
