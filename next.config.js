const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const assetPrefix =  "";

module.exports = withBundleAnalyzer({
  assetPrefix,
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
  env: {
    ASSET_PREFIX: assetPrefix,
  },
  exportPathMap: () => ({
    "/": { page: "/" },
  }),
});
