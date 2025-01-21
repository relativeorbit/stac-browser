module.exports = {
    catalogUrl: null,
    catalogTitle: "RelativeOrbit STAC Browser",
    allowExternalAccess: true, // Must be true if catalogUrl is not given
    allowedDomains: [],
    detectLocaleFromBrowser: true,
    storeLocale: true,
    locale: "en",
    fallbackLocale: "en",
    supportedLocales: [
        "de",
//      "de-CH",
        "es",
        "en",
        "fr",
//      "fr-CA",
//      "fr-CH",
        "it",
//      "it-CH",
        "ro"
    ],
    apiCatalogPriority: null,
    useTileLayerAsFallback: false,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: ({href, asset}) => {
      let url = encodeURIComponent(asset.href.startsWith("/vsi") ? asset.href : href);
      // console.log(url)
      console.log(asset)
      if (asset.href.endsWith('wrapped_phase.tif')) {
        console.log('TITILER WRAPPED PHASE')
        return "https://titiler.xyz/cog/tiles/WebMercatorQuad/{z}/{x}/{y}@2x?url={url}&rescale=-3.14,3.14&colormap_name=hsv";
      }
      else {
        console.log('TITLER DEFAULT')
        return "https://titiler.xyz/cog/tiles/WebMercatorQuad/{z}/{x}/{y}@2x?url={url}";
      }
    },
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "history",
    cardViewMode: "cards",
    cardViewSort: "asc",
    showThumbnailsAsAssets: false,
    stacLint: true,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    defaultThumbnailSize: null,
    maxPreviewsOnMap: 50,
    crossOriginMedia: "anonymous",
    requestHeaders: {},
    requestQueryParameters: {},
    preprocessSTAC: null,
    authConfig: null
};
