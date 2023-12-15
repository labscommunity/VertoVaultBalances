import { warp as warpFunction, configureWallet } from "./warpConfigs";

export async function getVertoState() {
  const contract_id = "usjm4PCxUd5mtaon7zc97-dt-3qf67yPyqgzLnLqk5A";

  const wallet = await configureWallet();
  const warp = await warpFunction("mainNet");

  const contract = warp
    .contract(contract_id)
    .setEvaluationOptions({
      internalWrites: true,
      remoteStateSyncEnabled: true,
    })
    .connect(wallet.jwk);

  const { cachedValue } = await contract.readState();

  const { state, validity, errorMessages } = cachedValue;

  return state;
}
