export default class SwapiService {
	_apiBase = 'https://swapi.dev/api';
	_imageBase = 'https://starwars-visualguide.com/assets/img';
	 getResorse = async (url) =>{
		const res = await fetch(`${this._apiBase}${url}`);
		
		if (!res.ok){
			throw new Error(`Could not fetch ${url}` +
			`, received ${res.status}`)
		}
		return await res.json();
	}
	 getAllPeople = async () =>{
		const res = await this.getResorse(`/people/`);
   		 return res.results
			.map(this._transformPerson)
			.slice(0, 8);
	}
	 getPersone = async (id) => {
		const person = await this.getResorse(`/people/${id}/`);
		return this._transformPerson(person);
	}
	getPersoneImage =  ({id}) =>{
		return `${this._imageBase}/characters/${id}.jpg`
	}
	 getAllPlanets = async () =>{
		const res = await this.getResorse(`/planets/`);
		return res.results
			.map(this._transformPlanet)
			.slice(1, 9);
	}
	 getPlanet  = async (id) => {
		const planet = await this.getResorse(`/planets/${id}/`);
		return this._transformPlanet(planet);
	}
	getPlanetImage =  ({id}) =>{
		return  `${this._imageBase}/planets/${id}.jpg`
	}
	 getAllStarships = async () =>{
		const res = await this.getResorse(`/starships/`);
		return res.results
			.map(this._transformStarship)
			.slice(2, 9);
	}
	
	 getStarship = async (id) => {
		const starship = await this.getResorse(`/starships/${id}/`);
		return this._transformStarship(starship);
	}
	getStarshipImage =  ({id}) =>{
		return  `${this._imageBase}/starships/${id}.jpg`
	}
	_exractId = (item) =>{
		const idRegExp= /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	}
	_transformPlanet = (planet) =>{
		
		return{	
			id: this._exractId(planet),		
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
		}
	}
	_transformStarship = (starship) =>{
		return{
			id: this._exractId(starship),
			name:starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			costInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity	
		}
	}
	_transformPerson = (person) =>{
		return{
			id: this._exractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}
	}
}