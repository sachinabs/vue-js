import axios from 'axios'

export class UserService {

    static getJokes = () => {

        var dataUri = "https://raw.githubusercontent.com/sachinabs/Joke-API/main/assets/json/punch.json";

        var dataFromUri = axios.get(dataUri);

        return dataFromUri;
    }

    static getFact = () => {

        const types = ['/1729/math', '/6/21/date', '/random/trivia', '/1492/year']
        const randomNumber = Math.floor(Math.random() * 3) + 1

        var dataUri = `https://numbersapi.p.rapidapi.com${types[randomNumber]}`

        const options = {
            params: { fragment: 'true', json: 'true' },
            headers: {
                'X-RapidAPI-Key': 'b6ebbfbafbmsh1339e00213892edp172afajsnd00e5bb84525',
                'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
        };

        var dataFromUri = axios.get(dataUri, options);

        return dataFromUri


    }

    static getMarvalQuote = () => {

        var dataUri = `https://marvel-quote-api.p.rapidapi.com/`

        const options = {
            params: { fragment: 'true', json: 'true' },
            headers: {
                'X-RapidAPI-Key': 'b6ebbfbafbmsh1339e00213892edp172afajsnd00e5bb84525',
                'X-RapidAPI-Host': 'marvel-quote-api.p.rapidapi.com'
            }
        };

        var dataFromUri = axios.get(dataUri, options);
        return dataFromUri

    }

}