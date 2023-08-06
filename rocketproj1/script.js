const toggleMode = () => {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar tag                        #id & tag
  const img = document.querySelector("#profile img");

  //substituir a imagem      vai procurar a class
  if (html.classList.contains("light")) {
    //setAttribute    qual attr,  será substituido por....
    img.setAttribute("src", "./assets/avatara.png");
  } else {
    img.setAttribute("src", "./assets/Avatar.png");
  }
};
