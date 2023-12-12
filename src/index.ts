import { firstNumbers } from './lib/savedStuff/firstNumbers'
import { sumValues, sumVault } from './lib/addUp/addUp'
import { getVertoState } from './lib/warp/getVertoState'


const firstNumbersAdded = sumValues(firstNumbers);
console.log('firstNumbersAdded', firstNumbersAdded);


const vertoState = await getVertoState()
const vault = vertoState.vault

const vaultAdded = await sumVault(vault)
console.log('vaultAdded:', vaultAdded)

console.log('End num:', firstNumbersAdded + vaultAdded)