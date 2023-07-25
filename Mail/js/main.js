// Input email Utent
const emailUtentInput = document.getElementById("email-utent");
console.log("Email utente: " + emailUtentInput.value);

// Button send
const btnSend = document.getElementById("btn-send");

// List Correct emails
const correctEmails = ["admin@gmail.com", "user@gmail.com", "guest@gmail.com"];
console.table(correctEmails);

// correct email
let correctEmail = "";

// Success Email
let isSuccessEmail = false;
// Mail Utent
let emailUtent = "";
emailUtent = emailUtentInput.value;
console.log("Mail del utente " + emailUtent);
console.log(typeof emailUtent);

// Button send Click
btnSend.addEventListener("click", function () {
  for (let i = 0; i < correctEmails.length; i++) {
    correctEmail = correctEmails[i];
    console.log(correctEmail);

    if (emailUtent == correctEmail) {
      isSuccessEmail = true;
    }
  }

  if (isSuccessEmail) {
    console.log("Email inserita corretta");
  } else {
    console.log("Email inserita nmon è corretta");
  }
});
