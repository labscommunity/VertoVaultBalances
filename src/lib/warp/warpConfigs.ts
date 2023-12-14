// @ts-ignore
import { WarpFactory, defaultCacheOptions } from 'warp-contracts';
// @ts-ignore
import { DeployPlugin, ArweaveSigner } from 'warp-contracts-plugin-deploy';
// @ts-ignore
import { LmdbCache } from 'warp-contracts-lmdb'


async function warp(network: string) {
  
  if (network === 'mainNet') {
    
    const warp = WarpFactory.forMainnet().use(new DeployPlugin())
    .useStateCache(new LmdbCache(
      { ...defaultCacheOptions, dbLocation: `./cache/warp/mainNet/state` }, 
      { maxEntriesPerContract: 100, minEntriesPerContract: 10 }
    ))
    .useContractCache(
      new LmdbCache({ ...defaultCacheOptions, dbLocation: `./cache/warp/mainNet/contracts` }), 
      new LmdbCache({ ...defaultCacheOptions, dbLocation: `./cache/warp/mainNet/src` }
    ));
    return warp

  } else {
      throw new Error('Error init warp!')
  }
}


async function configureWallet() {
    try {
        if (!process.env.wallet) {
            console.log("Please specify a wallet in the env")
            throw new Error("Please specify a wallet in the env")
        }
        const wallet = await JSON.parse(process.env.wallet)
        const jwk = new ArweaveSigner(wallet)
        return jwk
    } catch (err) {
        console.log('Error configure\'ing Wallet')
    }
}

export {
    configureWallet, 
    warp
}