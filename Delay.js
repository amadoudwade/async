function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value); // Enregistre la valeur
        await delay(1000);  // Attend 1 seconde
    }
}


const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

