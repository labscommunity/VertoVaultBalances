export function sumTateNumbers(obj: any) {
  let total = 0;
  for (const key in obj) {
    total += obj[key];
  }
  return total;
}

export async function sumVault(obj: any) {
  let total = 0;
  for (const key in obj) {
    try {
      const weird = obj[key];
      const strange = weird[0];
      total += strange.balance;
    } catch (error) {
      if (
        key === "WNeEQzI24ZKWslZkQT573JZ8bhatwDVx6XVDrrGbUyk" ||
        "BPr7vrFduuQqqVMu_tftxsScTKUq9ke0rx4q5C9ieQU" ||
        "3CbmnFJnY3uwrT6EYh3GoJ0bo-fWfUh9hS6XNQAEavY"
      ) {
      } else {
        console.log("Error at: " + key);
      }
    }
  }
  return total;
}

export async function sumBalances(obj: any) {
  let total = 0;
  for (const key in obj) {
    try {
      const weird = obj[key];
      total += weird;
    } catch (error) {
      console.log("Error at: " + key);
    }
  }
  return total;
}
