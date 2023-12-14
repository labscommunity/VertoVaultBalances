import { sumValues, sumVault } from './lib/addingFunctions/addUp'
import { getVertoState } from './lib/warp/getVertoState'
import * as fs from 'fs'


// tate small numbers
const firstNumbers = JSON.parse(fs.readFileSync('/Users/Lorimer/Desktop/Othent.io/VertoVaultBalances/src/lib/tateStuff/firstNumbers.json', 'utf-8'))
const firstNumbersAdded = sumValues(firstNumbers);
console.log('firstNumbersAdded', firstNumbersAdded);


// tate state
const tateState = JSON.parse(fs.readFileSync('/Users/Lorimer/Desktop/Othent.io/VertoVaultBalances/src/lib/tateStuff/tateFile.json', 'utf-8'))
const tateStateAdded = await sumVault(tateState.vault)
console.log('tateStateAdded', tateStateAdded)


// smartweave state
const smartweaveState = JSON.parse(fs.readFileSync('/Users/Lorimer/Desktop/Othent.io/VertoVaultBalances/smartweaveState.json', 'utf-8'))
const smartweaveStateAdded = await sumVault(smartweaveState.vault)
console.log('smartweaveStateAdded', smartweaveStateAdded)


// tom tool state
const tomToolState = JSON.parse(fs.readFileSync('/Users/Lorimer/Desktop/Othent.io/VertoVaultBalances/src/lib/tomTool/tomToolRes.json', 'utf-8'))
const tomToolStateAdded = await sumVault(tomToolState.vault)
console.log('tomToolStateAdded', tomToolStateAdded)


// PPE state
const ppeState = JSON.parse(fs.readFileSync('/Users/Lorimer/Desktop/Othent.io/VertoVaultBalances/src/lib/ppeRecommendation/ppeRecommendation.json', 'utf-8'))
const ppeStateAdded = await sumVault(ppeState.state.vault)
console.log('ppeStateAdded', ppeStateAdded)


// // warp state
// const vertoState = (await getVertoState()).vault
// const vaultAdded = await sumVault(vertoState)
// console.log('vaultAdded:', vaultAdded)

