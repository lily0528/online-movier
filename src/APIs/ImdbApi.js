const url = `https://www.omdbapi.com/`;
const key = 'apikey=2035acd1';

export class ImdbApi {

    static search = title => {
        return fetch(`${url}?${key}&s=${title}`)
            .then(response => response.json());
    }

    static get = id => {
        return fetch(`${url}?${key}&i=${id}`)
            .then(response => response.json());
    }
}