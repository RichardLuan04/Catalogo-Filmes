// URL = https://www.omdbapi.com/?t=[Nome do filme/serie/Anime]&apikey=6c370831

var fundo = document.getElementById("Trocar_Fundo")

async function Pesquisar_Filme() {

    var nomeFilme = document.getElementById('PesquisaFilme').value
    var endpoint = `https://www.omdbapi.com/?t=${nomeFilme}&apikey=6c370831`

    var response = await fetch(endpoint)
    var bodyJson = await response.json()
    
    var error = bodyJson.Response

    if (nomeFilme != "" && error == "True"){
        document.getElementById("imagemCatalogo").src = bodyJson.Poster
        document.getElementById("tituloCatalogo").innerText = bodyJson.Title
        document.getElementById("anoCatalogo").innerText = "Ano: " + bodyJson.Year
        document.getElementById("tempoCatalogo").innerText = "Tempo: " + bodyJson.Runtime
        document.getElementById ("infoCatalogo").innerText = "Sobre: " + bodyJson.Plot
        document.getElementById ("generoCatalogo").innerText = "Gênero: " + bodyJson.Genre
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
    } else {
        document.getElementById("imagemCatalogo").src = ""
        document.getElementById("anoCatalogo").innerText = ""
        document.getElementById("tempoCatalogo").innerText = ""
        document.getElementById ("infoCatalogo").innerText = ""
        document.getElementById ("generoCatalogo").innerText = ""
        document.getElementById("score").innerText = ""

        document.getElementById("tituloCatalogo").innerText = bodyJson.Error
    }
}