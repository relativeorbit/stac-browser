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
      console.log(asset.href)
      console.log(href)
      if (asset.href.endsWith('wrapped_phase.tif')) {
        console.log('TITILER WRAPPED PHASE')
        return "https://titiler.xyz/cog/tiles/WebMercatorQuad/{z}/{x}/{y}@2x?url={url}&rescale=-3.14,3.14&colormap_name=hsv";
      }
      else if (asset.href.endsWith('GEC.tif') || asset.href.endsWith('MM.tif')) {
        console.log('UMBRA OPEN DATA')
        // I think stac-layer doesn't know about other variable names, just try passing href to avoid double encoding with +s in names
        // [stac-layer] caught the following error while trying to add a tile layer: Error: No value provided for variable {gdalurl}
        // url encoding of spaces is strange. a workaround is to pass /vsicurl/ prefix
        // var gdalurl = ['/vsicurl?empty_dir=yes&url=', url].join('');
        // console.log(gdalurl)
        // Don't URL-encode just pass STAC href direct hrefs: 
        //let url = href;
        let url = url.replaceAll('+',' ')
        return "https://titiler.xyz/cog/tiles/WebMercatorQuad/{z}/{x}/{y}@2x?url={url}";
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
