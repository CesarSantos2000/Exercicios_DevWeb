var form = document.querySelector('form')

form.addEventListener('submit', function(e){

    //Bloquei o refresh da página
    e.preventDefault()

    //URL de pesquisa
    let urlform = "https://pokeapi.co/api/v2/pokemon/"

    //Valor do input name
    let name = document.getElementById("name")

    //Concatena a url com o input name
    urlform = urlform + this.name.value

    //Transforma todos os valores em minúsculo
    urlform = urlform.toLowerCase()

    //ID content
    let resposta = document.getElementById("content")

    //ID idpokemon
    let imagem = document.getElementById("idpokemon")

    //Resposta em HTML
    let html = ''

    fetch(urlform)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html


            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default +" '>"
        })
        .catch(function(err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado'
            } else{
                html = err
            }
            resposta.innerHTML = html
        })

});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}