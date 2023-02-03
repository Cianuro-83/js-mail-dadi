console.log("BENVENUTO CIANURO NELLA TUA BISCA CLANDESTINA");
const userElement = document.getElementById("user");
const mailElement = document.getElementById("mail");
let firstName = prompt("INSERISCI IL TUO NOME");
userElement.innerHTML = firstName;
console.log(userElement.outerText);
// creo array con le mail
const mail = [
  "buzzeosimone@gmail.com",
  "buzzeosimone@hotmail.com",
  "buzzeosimone@yahoo.com",
  "buzzeosimone@outlook.com",
  "buzzeosime@madonnadicanneto.it",
  "info@madonnadicanneto.it",
];
console.log(mail);
// chiedo la mail all'utente
let insertEmail = prompt("INSERISCI IL TUO INDIRIZZO EMAIL");
console.log(insertEmail);
// cerco la mail inserita
for (let i = 0; i < mail.length; i++) {
  if (mail[i] === insertEmail) {
    // console.log("Bentornato " + firstName);
    mailElement.innerHTML = "BENTORNATO " + firstName;
    break;
  } else {
    // console.log(
    //   "Siamo spiacenti " +
    //     firstName +
    //     " la tua mail non è presente nei nostri database. Per poter accedere alla Bisca devi prima registrarti."
    // );
    alert(
      "Siamo spiacenti " +
        firstName +
        " la tua mail non è presente nei nostri database. Per poter accedere alla Bisca devi prima registrarti."
    );
  }
}
