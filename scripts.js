
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function cliqueMascara() {
    form.style.left = "-455px"
    form.style.transform = "translateX(50%)"
    mascara.style.visibility = "hidden"
}