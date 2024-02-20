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
    useTileLayerAsFallback: true,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: ({
        href, // the url to the GeoTIFF
        asset, // the STAC Asset object
        key, // the key or name in the assets object that points to the particular asset
        item, // the STAC item / feature
        bounds, // LatLngBounds of the STAC asset
        isCOG = true, // true if the asset is definitely a cloud-optimized GeoTIFF
        isVisual = true, // true when the asset's key is "visual" (case-insensitive)
      }) => {
        // assets has three bands of RGB, so no need to specify bands
        if (isVisual) return "https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={url}";
    
        // select first three bands for non-visual assets, such as NAIP 4-band imagery
        // where we might want to ignore the Near-Infrared Band
        else return "https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={url}&bands=1,2,3"
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
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    preprocessSTAC: null,
    authConfig: null
};
