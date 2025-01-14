import { config } from 'dotenv'

config()

const debug = process.env.NODE_ENV !== 'production'

export default {
  app: {
    name: 'Proof Generation API',
    port: parseInt(process.env.PORT || 5000, 10),
    maticRPC: [process.env.MATIC_PROVIDER_URL],
    ethereumRPC: [process.env.ETHEREUM_PROVIDER_URL],
    mumbaiRPC: [process.env.MUMBAI_PROVIDER_URL],
    goerliRPC: [process.env.GOERLI_PROVIDER_URL],
    zkEVMMainnetURL: process.env.ZKEVM_MAINNET_URL,
    zkEVMTestnetURL: process.env.ZKEVM_TESTNET_URL
  },
  debug: debug,
  mainnetRpcIndex: 0,
  testnetRpcIndex: 0,
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
}
