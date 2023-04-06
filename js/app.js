const criptomonedasSelect = document.querySelector('#criptomonedas');

document.addEventListener('DOMContentLoaded', () => {
    cosultarCriptomonedas();
})

function cosultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.data))
}

function obtenerCriptomonedas() {
    
}