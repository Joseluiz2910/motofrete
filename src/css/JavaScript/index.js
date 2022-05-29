function clicar() {
    var distancia = window.document.getElementById('km')
    var resposta = window.document.getElementById('preco')
    var a = Number(distancia.value)
    var s = (a * 1.8)
    
    resposta.innerHTML = `R$ ${s}`
}