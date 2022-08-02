const form = document.querySelector('.form')
const input = document.querySelector('.input-search')
const btn_prev = document.querySelector('.btn-prev')
const btn_next = document.querySelector('.btn-next')
const pokemon_name = document.querySelector('.pokemon-name')
const pokemon_number = document.querySelector('.pokemon-number')
const pokemon_gif = document.querySelector('.pokemon-img')
let id_pokemon = 1

const fetchpokemon = async (pokemon) => {
    pokemon_name.innerHTML = 'Carregando...'
    pokemon_number.innerHTML = ''
    const apiresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(apiresponse.status == 200){
        const data = await apiresponse.json()

    return data
    }

}

const apresentpokemon = async (pokemon) => {

    const data = await fetchpokemon(pokemon)
    if(data){
        pokemon_gif.style.display = 'block'
    pokemon_name.innerHTML = data.name
    pokemon_number.innerHTML = data.id
    pokemon_gif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    
    input.value = ''
    id_pokemon = data.id
    } else{
        pokemon_gif.style.display = 'none'
        pokemon_name.innerHTML = 'Inexistente'
        pokemon_number.innerHTML = ''
        input.value = ''
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    apresentpokemon(input.value.toLowerCase())
})

btn_prev.addEventListener('click', () => {
    if(id_pokemon > 1){
        id_pokemon -= 1
    }
    apresentpokemon(id_pokemon)
})

btn_next.addEventListener('click', () => {
    if(id_pokemon < 905){
    id_pokemon += 1}
    apresentpokemon(id_pokemon)
})

apresentpokemon(id_pokemon)