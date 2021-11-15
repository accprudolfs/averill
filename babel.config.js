const isDev = String(process.env.NODE_ENV) === 'development'
const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'

const getEnvOptions = () => {
  if (isProd) {
    return {
      targets:
        'last 2 chrome version, last 2 safari version, last 2 chromeAndroid version, last 2 ios version',
      useBuiltIns: 'entry',
      modules: false,
      corejs: 3,
    }
  }

  if (isTest) {
    return { targets: { node: 'current' } }
  }

  return {
    targets:
      'last 1 chrome version, last 1 safari version, last 1 chromeAndroid version, last 1 ios version',
    useBuiltIns: 'entry',
    modules: false,
    corejs: 3,
  }
}

const presets = [['@babel/env', getEnvOptions()], '@babel/preset-react']

const plugins = [
  '@babel/plugin-proposal-class-properties',
  isDev && 'react-refresh/babel',
].filter(Boolean)

module.exports = { presets, plugins, babelrcRoots: ['.', './packages/*'] }
