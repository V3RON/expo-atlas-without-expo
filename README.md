<div align="center">

# 📊 expo-atlas-without-expo

[![npm version](https://img.shields.io/npm/v/expo-atlas-without-expo.svg?style=flat-square)](https://www.npmjs.com/package/expo-atlas-without-expo)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/v3ron/expo-atlas-without-expo/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**Supercharge your vanilla React Native apps with Expo Atlas metrics**

[Installation](#installation) •
[Usage](#usage) •
[Documentation](#configuration-options) •
[Contributing](#contributing)

---

</div>

## Overview

This package allows you to use Expo Atlas in your vanilla React Native applications without requiring a full Expo setup. It provides the same functionality as Expo Atlas in Expo apps but works with custom Metro configurations.

## ✨ Features

- 🔄 Seamless integration with existing Metro config
- 📊 Full Expo Atlas metrics support
- 🛠 Custom serializer preservation
- ⚡️ Zero performance overhead
- 🎯 Simple one-line setup

## 🚀 Installation

```bash
npm install --save-dev expo-atlas-without-expo
# or
yarn add -D expo-atlas-without-expo
# or
pnpm add --save-dev expo-atlas-without-expo
```

## 📖 Usage

1. Import the adapter in your Metro configuration file (`metro.config.js`):

```javascript
const { withExpoAtlasWithoutExpo } = require('expo-atlas-without-expo');

module.exports = withExpoAtlasWithoutExpo({
  // Your existing Metro configuration
}, {
  // Optional: Specify custom Atlas options
  atlasFile: 'path/to/atlas-stats.json'
});
```


2. Bundle your application using the React Native CLI:

```bash
npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle
# or for Android
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
```

3. Run Expo Atlas - it will automatically detect and analyze the statistics gathered during bundling:

```bash
npx expo-atlas
```

## ⚙️ Configuration Options

The `withExpoAtlasWithoutExpo` function accepts two parameters:

- `metroConfig`: Your base Metro configuration object
- `options`: (Optional) An object with the following properties:
    - `atlasFile`: Custom path for the Atlas statistics output file

## 🔍 How It Works

The adapter wraps your Metro configuration with Expo Atlas while preserving your existing serializer settings. It ensures compatibility between Expo Atlas and your custom Metro setup by:

1. Maintaining your existing Metro configuration
2. Adding the necessary Expo Atlas instrumentation
3. Preserving any custom serializers you may have configured

## 💡 Example

```javascript
const { withExpoAtlasWithoutExpo } = require('expo-atlas-without-expo');

const config = {
  transformer: {
    // Your transformer config
  },
  resolver: {
    // Your resolver config
  },
  // ... other Metro config options
};

module.exports = withExpoAtlasWithoutExpo(config, {
  atlasFile: './build/atlas-stats.json'
});
```

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
