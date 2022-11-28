import axios from 'axios'

export class UserService {

    static fetchdata = () => {
        var dataUri = "https://raw.githubusercontent.com/sachinabs/Joke-API/main/assets/json/punch.json";
        var dataFromUri = axios.get(dataUri);
        return dataFromUri;
    }

    static getFact = () => {

        var dataUri = "https://numbersapi.p.rapidapi.com/6/21/date"

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

}