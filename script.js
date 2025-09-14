//cotacao de moedas por dia
const USD = 4.87
const EUR = 5.82
const GBP = 6.08

//obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount pra cereber somente nuumeros
amount.addEventListener("input",() => {
    const hasCharactersRegex = /\D+/g                 // substitue por nada  e isso e global
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//capturando o evento de submit do formulario.
form.onsubmit = (event) => {
    // tira a atualizaçao da tela ao clicar no botao 'submit'  
    //console.log(currency.value)  EAE vai continua na mesma tela ao inves de pisca a tela e atualiza ela
    event.preventDefault()  
                        
    switch(currency.value) {

        //caso for essa moeda = case
        case "USD":                  // e possivel colocar o valor USD fixo, mas e prefirivel fazer uma funçao e variavel que pegue o valor fixo da moeda automaticamente pela internet
            convertCurrency(amount.value, USD, "US$")
        break

        case "EUR":
            convertCurrency(amount.value, EUR, "€")
        break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
        break
    }
}

//funçao pra converter a moeda  //amount=total price= valor atual preço symbol= simbolo da moeda
function convertCurrency(amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //add aplica classe css que exibe o footer no html
        footer.classList.add("show-result")
        // remove a class do html - footer.classList.remove(".show-result")
        
        let total = amount * price
        Number(total)
        if (isNaN(total)) {
            return alert("Por favor, digite valor correto para converter.")
        }
        total = formatCurrencyBRL(total).replace("R$", "")
        //  result.textContent = `${total} Reais` // exibe o resultado no h1
    } catch(error){
        console.log(error)
        alert("não foi possivel converter. Tente novamente mais tarde")
    }
    
    function formatCurrencyBRL(value) {
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })
    }

}
