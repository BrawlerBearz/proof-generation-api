
require('dotenv').config()

const debug = process.env.NODE_ENV !== 'production'

export default {
  app: {
    name: 'Proof Generation API',
    port: parseInt(process.env.port || 5000, 10),
    maticRPC: [process.env.MATIC_PROVIDER_URL],
    ethereumRPC: [process.env.ETHEREUM_PROVIDER_URL]
  },
  debug: debug,
  mainnetRpcIndex: 0,
  testnetRpcIndex: 0
}
