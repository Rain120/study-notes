module.exports = function(context, options) {
    return {
      name: 'config-webpack-plugin',
      configureWebpack(config, isServer) {
        // INFO: react-pdf 不支持 SSR
        if (isServer) {
          config.resolve.alias.canvas = false;
          config.resolve.alias.encoding = false;
        }

        return {
          resolve: {
            alias: config.resolve.alias
          }
        };
      },
    };
  };