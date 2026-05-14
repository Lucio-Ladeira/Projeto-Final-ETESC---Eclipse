function switchTheme() {
    const body = document.getElementById("body")
    if (body.classList.contains("tema-dark") ) {
        body.classList.replace("tema-dark", "tema-light")
    } else if (body.classList.contains("tema-light") ) {
        body.classList.replace("tema-light", "tema-dark")
    }
}