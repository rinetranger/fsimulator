module.exports = function override(config, env) {
    if (env === 'development') {
      config.devServer.port = 3000; // ここでポート番号を設定します。
    }
    if (env === 'production') {
      config.output.publicPath = '/';
    }
    return config;
  };
  