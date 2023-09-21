<<<<<<< .merge_file_a36824

require('dotenv').config()

const debug = process.env.NODE_ENV !== 'production'

export default {
  app: {
    name: 'Proof Generation API',
    port: parseInt(process.env.PORT || 5000, 10),
    maticRPC: [process.env.MATIC_PROVIDER_URL],
    ethereumRPC: [process.env.ETHEREUM_PROVIDER_URL],
    mumbaiRPC: [process.env.MUMBAI_PROVIDER_URL],
    goerliRPC: [process.env.GOERLI_PROVIDER_URL]
=======
import { config } from 'dotenv'

config()

const debug = process.env.NODE_ENV !== 'production'
export default {
  app: {
    name: process.env.NAME || 'Proof Generation API',
    port: parseInt(process.env.PORT || 5000, 10),
    maticRPC: JSON.parse(process.env.MATIC_RPC),
    ethereumRPC: JSON.parse(process.env.ETHEREUM_RPC),
    goerliRPC: JSON.parse(process.env.GOERLI_RPC),
    mumbaiRPC: JSON.parse(process.env.MUMBAI_RPC),
    zkEVMMainnetURL: process.env.ZKEVM_MAINNET_URL,
    zkEVMTestnetURL: process.env.ZKEVM_TESTNET_URL
>>>>>>> .merge_file_a39496
  },
  debug: debug,
  mainnetRpcIndex: 0,
  testnetRpcIndex: 0,
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
}
