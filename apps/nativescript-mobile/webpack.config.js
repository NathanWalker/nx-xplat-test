const webpack = require("@nativescript/webpack");
const { resolve } = require('path');

module.exports = (env) => {
	webpack.init(env);

  // ignore warnings from env base
  webpack.chainWebpack(config => {
    config.set(
      'ignoreWarnings',
      (config.get('ignoreWarnings') || []).concat([
        /environments\/base/
      ])
    );
    // config.set('cache', false);
    // config.set('watch', true);
  });

  webpack.chainWebpack(config => {
    // shared scss
    config.resolve.alias.set('@freshnx12/xplat-nativescript-scss', resolve(__dirname, '../../libs/xplat/nativescript/scss/src/'));
    config.resolve.alias.set('@freshnx12/xplat-scss', resolve(__dirname, '../../libs/xplat/scss/src/'));
    config.resolve.alias.set('nativescript-theme-core', resolve(__dirname, '../../node_modules/nativescript-theme-core/'));
  });

  webpack.mergeWebpack({ 
    watch: true,
    watchOptions: {
      aggregateTimeout: 10000,
      poll: true,
      ignored: [
        `node_modules`
      ]
    } });

  // webpack.mergeWebpack({ watch: true });

	return webpack.resolveConfig();
};
