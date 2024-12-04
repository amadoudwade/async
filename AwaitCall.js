async function awaitCall() {
    
    function ApiCall() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: "Voici les données de l'API" });
            }, 2000); // Simule un délai de 2 secondes
        });
    }

    try {
        console.log("Appel à l'API...");
        const response = await ApiCall(); // Attente de la réponse de l'API
        console.log("Données reçues :", response.data); 
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API :", error);
    }
}

awaitCall();
