const p = document.querySelectorAll("td p");

for (let index = 0; index < p.length; index++) {
  const element = p[index].childNodes[0].nodeValue;
  switch (element) {
    case "Planta":
      p[index].className = "planta";
      break;
    case "Veneno":
      p[index].className = "veneno";
      break;
    case "Fuego":
      p[index].className = "fuego";
      break;
    case "Volador":
      p[index].className = "volador";
      break;
    case "Agua":
      p[index].className = "agua";
      break;
    case "Eléctrico":
      p[index].className = "electrico";
      break;
    case "Especial":
      p[index].className = "especial";
      break;

    default:
      break;
  }
}
