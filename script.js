function toggleMode () {
    const html = document.documentElement

    if(html.classList.contains("light-page")) {
        html.classList.remove("light-page")
    } else {
        html.classList.add("light-page")
    }
    // AINDA É POSSÍVEL SIMPLIFICAR ESSA FUNÇÃO 
    // html.classList.toggle("light-page")

    const img = document.querySelector("#profile img")

    if(html.classList.contains("light-page")) {
        img.setAttribute("src", "./assets/perfil.png")
    } else { 
        img.setAttribute("src", "./assets/perfil.png")
    }

}