

export function sumValues(obj: any) {
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
            const weird = obj[key]
            const strange = weird[0]
            total += strange.balance
            
        } catch (error) {
            console.log('Error at: ' + key, error)
        }
        
    }
    return total;
}
