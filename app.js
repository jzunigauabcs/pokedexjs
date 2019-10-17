const random = function () {
	return function(min, max) {
		return Math.round(Math.random() * (max - min)) + min
	}
}

const getPokemon = function (index) {
	const pokemons = [
		{
			name: 'bulbasaur',
			img: '001'
		},
		{
			name: 'ivysaur',
			img: '002'
		},
		{
			name: 'venusaur',
			img: '003'
		},
		{
			name: 'charmander',
			img: '004'
		},
		{
			name: 'charmeleon',
			img: '005'
		},
		{
			name: 'charizard',
			img: '006'
		},
		{
			name: 'squirtle',
			img: '006'
		},
		{
			name: 'wartortle',
			img: '008'
		},
		{
			name: 'blastoise',
			img: '009'
		},
	]
	return  pokemons[index]
}

const randomRange = random()

const renderPokemon = function(pokemon) {
	const screen = document.querySelector('.screen')
	screen.innerHTML = ''
	screen.appendChild(createImg(`images/${pokemon.img}.png`))
	screen.appendChild(createName(pokemon.name))
}

const createImg = function(url) {
	const pokeImg = document.createElement('img')
	pokeImg.src = url
	pokeImg.classList.add('image')
	return pokeImg
}

const createName = function (name) {
	const pokeName = document.createElement('h2')
	const text = document.createTextNode(name)
	pokeName.appendChild(text)
	pokeName.classList.add('name')
	return pokeName
}

const init = function () {
	let pokemonId = 0
	let pokemon = getPokemon(pokemonId)
	renderPokemon(pokemon)

	const btnBack = document.querySelector('#btnBack')
	const btnNext = document.querySelector('#btnNext')

	btnBack.addEventListener('click', function () {
		if(pokemonId === 0)
			pokemonId = 9 

		renderPokemon(getPokemon(--pokemonId))
	})

	btnNext.addEventListener('click', function () {
		if(pokemonId === 8)
			pokemonId = -1

		renderPokemon(getPokemon(++pokemonId))
	})
}

init()



















