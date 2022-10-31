const generator = () => {
   let first = ["Princesa ","Preciosa ","Bebé ","Bebita ","Niñita ","Diablita ","Mami ","Mamita ","Reina ","Preciosa Amazona ","Hermosa Atrevida ","Diabla de mi infierno ","Diabla de mi cielo ","Corazón ","Amor ","Corazón de mi vida "];
   let second = ["yo quiero ","yo puedo ","deseo ","yo vengo a ","vengo para ","voy a ","solo quiero ","solo deseo ","yo voy a ","he esperado tanto para ","preparate porque hoy voy a "];
   let third = ["encenderte ","amarte ","besarte ","ligar ","jugar ","retozar ","bailar ","muñequar ","perrear ","despertarte ","activarte "];
   let fourth = ["suave ","suavemente ","lento ","lentamente ","rápido ","tiernamente ","fuerte ","duro ","sutilmente ","violentamente "];
   let fifth = ["hasta que salga el sol ","hasta el amanecer ","toda la noche ","todo el día ","todas las noches ","todos los días ","por los siglos de los siglos "];
   let sixth = ["sin anestecia.","sin compromiso.","sin complicarnos.","y seremos solo amigos.","cara a cara.","sin miedo.","no perdamos más tiempo."];

   let phrase = "";
   let group=[first,second,third,fourth,fifth,sixth];

   for (let i = 0; i <6; i++){
      phrase += group[i][Math.floor(Math.random() * group[i].length)]
   }

   console.log (phrase);
}

generator();