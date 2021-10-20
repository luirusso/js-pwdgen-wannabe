// Ottieni nome dell'utente

const nomeUtente = prompt("Qual è il tuo nome?");
console.log(nomeUtente)

// Ottieni cognome dell'utente

const cognomeUtente = prompt("Qual è il tuo cognome?");
console.log(cognomeUtente)

// Ottieni colore preferito dell'utente
const colorePref = prompt("Qual è il tuo colore preferito?");
console.log(colorePref)

// Produci una password nel formato "nomecognomecolorepreferito21"
document.getElementById("generated_password").innerHTML = nomeUtente + cognomeUtente + colorePref + 21