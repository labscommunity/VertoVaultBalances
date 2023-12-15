import {
  sumTateNumbers,
  sumVault,
  sumBalances,
} from "./lib/addingFunctions/addUp";
import { getVertoState } from "./lib/warp/getVertoState";
import * as fs from "fs";

// tate small numbers
const firstNumbers = JSON.parse(
  fs.readFileSync(`${__dirname}/lib/tateStuff/firstNumbers.json`, "utf-8"),
);
const firstNumbersAdded = sumTateNumbers(firstNumbers);
console.log("firstNumbersAdded", firstNumbersAdded.toLocaleString());
console.log("");

// tate state
const tateState = JSON.parse(
  fs.readFileSync(`${__dirname}/lib/tateStuff/tateFile.json`, "utf-8"),
);
const tateStateAdded = await sumVault(tateState.vault);
console.log("tateStateAdded", tateStateAdded);
const tateBalancesAdded = await sumBalances(tateState.balances);
console.log("tateBalancesAdded", tateBalancesAdded);
console.log(
  "Tate added: ",
  (tateStateAdded + tateBalancesAdded).toLocaleString(),
);
console.log("");

// tom tool state
const tomToolState = JSON.parse(
  fs.readFileSync(`${__dirname}/lib/tomTool/tomToolRes.json`, "utf-8"),
);
const tomToolStateAdded = await sumVault(tomToolState.vault);
console.log("tomToolStateAdded", tomToolStateAdded);
const tomToolBalancesAdded = await sumBalances(tomToolState.balances);
console.log("tomToolBalancesAdded", tomToolBalancesAdded);
console.log(
  "Tom tool added: ",
  (tomToolStateAdded + tomToolBalancesAdded).toLocaleString(),
);
console.log("");

// PPE state
const ppeState = JSON.parse(
  fs.readFileSync(
    `${__dirname}/lib/ppeRecommendation/ppeRecommendation.json`,
    "utf-8",
  ),
);
const ppeStateAdded = await sumVault(ppeState.state.vault);
console.log("ppeStateAdded", ppeStateAdded);
const ppeBalancesAdded = await sumBalances(ppeState.state.balances);
console.log("ppeBalancesAdded", ppeBalancesAdded);
console.log("PPE added: ", (ppeStateAdded + ppeBalancesAdded).toLocaleString());
console.log("");

// smartweave state
const smartweaveState = JSON.parse(
  fs.readFileSync("./smartweaveState.json", "utf-8"),
);
const smartweaveStateAdded = await sumVault(smartweaveState.vault);
console.log("smartweaveStateAdded", smartweaveStateAdded);
const smartweaveBalancesAdded = await sumBalances(smartweaveState.balances);
console.log("smartweaveBalancesAdded", smartweaveBalancesAdded);
console.log(
  "Smartweave added: ",
  (smartweaveStateAdded + smartweaveBalancesAdded).toLocaleString(),
);
console.log("");

// // warp state
// const vertoState = (await getVertoState()).vault
// const vaultAdded = await sumVault(vertoState)
// console.log('vaultAdded:', vaultAdded)
