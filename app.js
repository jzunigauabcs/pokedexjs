const random = function () {
	return function(min, max) {
		return Math.round(Math.random() * (max - min)) + min
	}
}

const getPokemon = function (index) {
	const API = 'https://pokeapi.co/api/v2/pokemon/'
	$.ajax({
		type: 'GET',
		url: `${API}${index}`,
		dataType: 'json',
		contenType: 'application/javascript'
	}).done(function(data) {
		renderPokemon(data)
	}).fail(function(jqXHR, textStatus, errorThrown) {
		$('.screen').html('').append(renderError('Ocurrió un error. Por favor vuelva a intentarlo'))
	})

}

const randomRange = random()

const renderPokemon = function(pokemon) {
	const screen = document.querySelector('.screen')
	screen.innerHTML = ''
	screen.appendChild(createImg(pokemon.sprites.front_default))
	screen.appendChild(createName(pokemon.name))
}

const renderError = function (errorMsj) {
	const error = document.createElement('h2')
	const text = document.createTextNode(errorMsj)
	error.appendChild(text)
	error.style.color = 'red'
	return error
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
	let pokemonId = 1
	getPokemon(pokemonId)

	const $btnBack = $('#btnBack')

	$btnBack.on('click', function() {
		if(pokemonId === 1)
			pokemonId = 9 
		getPokemon(--pokemonId)
	})


	const btnNext = document.querySelector('#btnNext')
	btnNext.addEventListener('click', function () {
		if(pokemonId === 150)
			pokemonId = -1

		getPokemon(++pokemonId)
	})
}

init()



















