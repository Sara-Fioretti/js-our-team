const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

/*PROCEDIMENTO:
1)  Aggancio la card container ad una variabile
2) Creo una funzione createCard
  2.1)Faccio un ciclo for che va da i=0 a i<teamMembers.length
  2.2) Destruttuto l'array e creo una variabile{name, role, email, img}
  2.3) Creo un div cardContainer con il comando createElement
  2.4) Creo un div imageContainer con il comando createElement
  2.5) Creo una variabile memberImage, gli metto il source e l'appendo all'imageContainer
  2.6) Creo un div textContainer con il comando createElement
  2.7) Creo una variabile memberName e metto come innerText name
  2.8) Creo una variabile memberRole e metto come innerText role
  2.9) Creo una variabile memberEmail e metto come innerText email
  2.10) Con il comando appendChild appendo memberName, memberRole e memberEmail al textContainer
  2.11) Con il comando appendChild appendo il textContainer al cardContainer
  2.12) Con il comando appendChild appendo il textContainer al teamContainer

  3) BONUS: Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina

 
 
