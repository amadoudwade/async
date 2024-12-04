async function awaitCall() {
   
    function ApiCall() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                Math.random() > 0.3 // 30% de chances de succès ou d'échec
                    ? resolve({ data: "Voici les données de l'API" }) 
                    : reject(new Error("Une erreur est survenue lors de l'appel à l'API"));
            }, 2000); 
        });
    }

    try {
        console.log("Appel à l'API...");
        const response = await ApiCall();
        console.log("Données reçues :", response.data);
    } catch (error) {
        console.error("Désolé, nous n'avons pas pu récupérer les données. Veuillez réessayer plus tard.");
        console.error("Détails de l'erreur :", error.message); 
    }
}


awaitCall();

// Tâche 3: Chaîner Async/Await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Trois fonctions asynchrones distinctes
async function asyncFunction1() {
    await delay(1000);
    console.log("Fonction 1 exécutée après 1 seconde");
}

async function asyncFunction2() {
    await delay(1000);
    console.log("Fonction 2 exécutée après 1 seconde");
}

async function asyncFunction3() {
    await delay(1000);
    console.log("Fonction 3 exécutée après 1 seconde");
}

// Fonction qui enchaîne..
async function chainedAsyncFunctions() {
    console.log("Début de l'exécution des fonctions asynchrones...");
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
    console.log("Toutes les fonctions ont été exécutées");
}


chainedAsyncFunctions();

