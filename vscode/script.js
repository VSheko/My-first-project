function toggleMode() {
    const html = document.documentElement
    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')){
        html.classList.remove('light')
    }
    else {
        html.classList.add('light')
    }
//Poderia ser feito com html.classList.toggle('light')

    if(html.classList.contains('light')){
      img.setAttribute('src', './assets/avatar-light.png')
      img.setAttribute('alt', 'Foto de Vitor Perusia com semblante sério, contém um fundo braco')
    }
    else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt','"Foto de Vitor Perusia com o semblante feliz, possui um fundo preto"')
    }

    
}