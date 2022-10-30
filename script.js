// URL = https://www.omdbapi.com/?t=[Nome do filme/serie/Anime]&apikey=6c370831

var fundo = document.getElementById("Trocar_Fundo")

async function Pesquisar_Filme() {

    var nomeFilme = document.getElementById('PesquisaFilme').value
    var endpoint = `https://www.omdbapi.com/?t=${nomeFilme}&apikey=6c370831`

    var response = await fetch(endpoint)
    var bodyJson = await response.json()
    
    if (nomeFilme != ""){
        var imagem = document.getElementById("imagemCatalogo").src = bodyJson.Poster
        var titulo = document.getElementById("tituloCatalogo").innerText = bodyJson.Title
        var ano = document.getElementById("anoCatalogo").innerText = "Ano: " + bodyJson.Year
        var tempo = document.getElementById("tempoCatalogo").innerText = "Tempo: " + bodyJson.Runtime
        var info = document.getElementById ("infoCatalogo").innerText = "Sobre: " + bodyJson.Plot
        var genero = document.getElementById ("generoCatalogo").innerText = "Gênero: " + bodyJson.Genre
        var score = document.getElementById("score").innerText = bodyJson.Metascore

        if (score >= 60) {
            fundo.setAttribute("id", "fundo-verde") 
        }
        else if (score >= 40) {
            fundo.setAttribute("id", "fundo-laranja")
        } else if (score < 40){
            fundo.setAttribute("id", "fundo-vermelho")
        } else {
            fundo.setAttribute("id", "fundo-cinza")
        }   
    }
}