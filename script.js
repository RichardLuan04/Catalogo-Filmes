// URL = https://www.omdbapi.com/?t=[Nome do filme/serie/Anime]&apikey=6c370831

async function Pesquisar_Filme() {
    var nomeFilme = document.getElementById('PesquisaFilme').value;
    var endpoint = `https://www.omdbapi.com/?t=${nomeFilme}&apikey=6c370831`

    var response = await fetch(endpoint);
    var bodyJson = await response.json();

    var catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = '';

    var imagemJson = bodyJson.Poster
    var imagem = document.createElement('img')
    imagem.src = imagemJson
    catalogo.append(imagem)
}