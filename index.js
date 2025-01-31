const { withExpoAtlas } = require('expo-atlas/metro');
const { getBaseSerializer } = require('./base-serializer');

/**
 * Initialize Expo Atlas to gather statistics from Metro when exporting bundles.
 * This function adds the required Metro config, and should be the last config mutation.
 *
 * @param {import("metro-config").MetroConfig} metroConfig
 * @param {{ atlasFile: string; }} [options]
 */
const withExpoAtlasWithoutExpo = (metroConfig, options) => {
  return withExpoAtlas({
    ...metroConfig,
    serializer: {
      ...metroConfig.serializer,
      customSerializer: metroConfig.serializer?.customSerializer ?? getBaseSerializer(),
    }
  }, options);
};

module.exports = { withExpoAtlasWithoutExpo };
