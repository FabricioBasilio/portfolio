const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", enviarMensagem);

function enviarMensagem(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5596981048077";

    const texto = `Oi! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`
    
    window.open(url, "_blank")
}