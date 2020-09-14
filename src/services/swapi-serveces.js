export default class SwapiService {
	_apiBase = 'https://swapi.dev/api'
	async getResorse(url){
		const res = await fetch(`${this._apiBase}${url}`);
		
		if (!res.ok){
			throw new Error(`Could not fetch ${url}` +
			`, received ${res.status}`)
		}
		return await res.json();
	}
	async getAllPeople(){
		const res = await this.getResorse(`/people/`);
		return res.results;
	}
	getPersone (id) {
		return this.getResorse(`/people/${id}/`)
	}
	async getAllPlanets(){
		const res = await this.getResorse(`/planets/`);
		return res.results;
	}
	getPlanet (id) {
		return this.getResorse(`/planets/${id}/`)
	}
	async getAllStarships(){
		const res = await this.getResorse(`/starships/`);
		return res.results;
	}
	getStarship (id) {
		return this.getResorse(`/starships/${id}/`)
	}
}