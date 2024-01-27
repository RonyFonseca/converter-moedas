const moneyBr = document.getElementById("money-br")
const botaoConvert = document.getElementById("botao-convert")
const moedaGerais = document.getElementById("moeda-gerais")

const dolar = 5
const euro = 5.36

const convert = () => {
    const textValue = document.getElementById("text-value")
    const textValueBr = document.getElementById("text-value-br")
    textValueBr.innerHTML = `R$ ${moneyBr.value}`
    
    if (moedaGerais.value === "US$ Dólar Americano"){
        textValue.innerHTML = `US$ ${moneyBr.value / dolar}`
    }

    if(moedaGerais.value === "Euro"){
        let newEuro = parseInt(moneyBr.value / euro)
        textValue.innerHTML = `US$ ${newEuro}`
    }
}

const troca = () => {

    if (moedaGerais.value === "Euro"){
        const name = document.getElementById("name-moeda")
        const img = document.getElementById("bandeira-img")
        name.innerHTML = "Euro"
        img.src = "../assets/euro.jpg"
    }

    if (moedaGerais.value === "US$ Dólar Americano"){
        const name = document.getElementById("name-moeda")
        const img = document.getElementById("bandeira-img")
        name.innerHTML = "US$ Dólar Americano"
        img.src = "../assets/estados-unidos.jpg"
    }

    convert()
}

botaoConvert.addEventListener("click", convert)
moedaGerais.addEventListener("change", troca)