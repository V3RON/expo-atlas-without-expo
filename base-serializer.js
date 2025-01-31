const createSerializer = () => {
  const baseJSBundle = require('metro/src/DeltaBundler/Serializers/baseJSBundle');
  const bundleToString = require("metro/src/lib/bundleToString");

  return (entryPoint, prepend, graph, bundleOptions) => bundleToString(
    baseJSBundle(entryPoint, prepend, graph, bundleOptions)
  );
}

const getBaseSerializer = () => {
  try {
    return createSerializer();
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND')  {
      throw new Error('Cannot find required internals of Metro. Please make sure you have installed the correct version of Metro.');
    }

    throw error;
  }
}

module.exports = { getBaseSerializer };
