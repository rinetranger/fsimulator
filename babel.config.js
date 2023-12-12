module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-env', { targets: '> 0.25%, not dead', modules: false, useBuiltIns: 'usage', corejs: 3 }],

  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { node: 'current' },
            modules: 'auto', // This should be 'auto' or 'commonjs' when running in test environment
          }
          ,
        ],
      ],
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
};
