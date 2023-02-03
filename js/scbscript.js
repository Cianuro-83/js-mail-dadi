console.log("BENVENUTO CIANURO NELLA TUA BISCA CLANDESTINA");
const userElement = document.getElementById("user");
const mailElement = document.getElementById("mail");
let firstName = prompt("INSERISCI IL TUO NOME");
userElement.innerHTML = firstName;
console.log(userElement.outerText);
// creo array con le mail
const mail = [
  "buzzeosimone@gmail",
  "buzzeosimone@hotmail.com",
  "buzzeosimone@yahoo.com",
  "buzzeosimone@outlook.com",
  "buzzeosime@madonnadicanneto.it",
  "info@madonnadicanneto.it",
];
console.log(mail);
let insertEmail = prompt("INSERISCI IL TUO INDIRIZZO EMAIL");
console.log(insertEmail);
