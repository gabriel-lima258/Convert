// current currency values
const USD = 5.47
const EUR = 6.04
const GBP = 7.08

const form = document.querySelector('form');
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Getting input to manipulate value with only numbers 
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  // replace characters from input with empty string
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.addEventListener('submit', (event) => {
  // disable submit standard action button
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
})

// function to convert currency
function convertCurrency(amount, price, symbol) {
  try {
    // updating the currency selected
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // get the result conversion
    let total = amount * price
    // removed the R$ symbol before
    total = formatCurrencyBRL(total).replace("R$","")

    result.textContent = `${total} Reais` 

    // show footer page if result of convert was successful
    footer.classList.add('show-result')
  } catch (error) {
    console.log(error)
    footer.classList.remove('show-result')
    alert("It was not possible to reach the value")
  }
}


// return the value already formatted
function formatCurrencyBRL(value) {
  // convert number first and then it'll get local currency
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

