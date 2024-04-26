const path = require('path');

module.exports = function(context, options) {
  return {
    name: 'docusaurus-plugin-image-zoom-local',

    getClientModules(options) {
      return [path.resolve(__dirname, './zoom')];
    },
  };
};