const emailUtent = prompt("Inserisci la tua email");
console.log("Email utente: " + emailUtent);

const correctEmails = ["admin@gmail.com", "user@gmail.com", "guest@gmail.com"];
console.table(correctEmails);

let successEmail;

for (let i = 0; i < correctEmails.length; i++) {
  correctEmail = correctEmails[i];
  // console.log(correctEmail);

  if (emailUtent == correctEmail) {
    successEmail = correctEmail + " Email inserita corretta";
  } else {
    successEmail = "Email inserita incorretta";
  }
}

console.log(successEmail);
