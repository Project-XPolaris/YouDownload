module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-transform-runtime',
      {
        regenerator: true
      }
    ],
    '@babel/plugin-proposal-class-properties'
  ]
}
