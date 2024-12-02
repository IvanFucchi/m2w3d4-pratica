
// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
console.log("lo script è collegato")

function cambiaTitolo(titoloNuovo) {
    const h1 = document.querySelector('h1');
    h1.textContent = titoloNuovo;
}

cambiaTitolo("NANDOOOOO")

function cambiaTitoloH2(titoloNuovo) {
    const h2Arr = document.querySelectorAll('h2');
    console.log(h2Arr)

    for(let i = 0; i <= h2Arr.length; i++) {
        const obj = h2Arr[i];
        if(obj == null ) {
            console.log("oggetto null")
        } else {
            obj.textContent = titoloNuovo 
        }
        
    }
}

/*let heading = document.getElementById('headin');
if (heading == null) {
console.log('Variable is null - cannot assign value to a null variable');
} else {
heading.textContent = 'Hello World!';
}*/

cambiaTitoloH2("bormio")

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

changeBackground("green")



function cambiaIndirizzoFooter(nuovoIndirizzo) {
    const footer = document.querySelector('footer p');
    footer.textContent = nuovoIndirizzo;
}

cambiaIndirizzoFooter(" via GianMaria Volonté")

function aggiungiClasseLinkAmazon(classe) {
    const links = document.querySelectorAll('table tbody a');
    links.forEach(link => link.classList.add(classe));
}

aggiungiClasseLinkAmazon("linkAmazon")

function toggleVisibilitaImmagini(classe) {
    const immagini = document.querySelectorAll('table tbody img');
    immagini.forEach(immagine => {
        immagine.classList.toggle(classe);
    });
}

function cambiaColorePrezzo() {
    const prezzi = document.querySelectorAll('table tbody td:nth-child(4)');
    prezzi.forEach(prezzo => {
        prezzo.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
}

