import axios from 'axios';

const URL = "";
let headers = {};


export const GET = async (path = "", params = {}) => {

    let addParams = "";
    for (let i in params) {
        addParams += (addParams ? '&' : '?') + `${i}=${params[i]}`;
    }
    const fullURL = URL + path + addParams;

    return new Promise((resolve, reject) => {

        axios.get(fullURL, {
            headers: headers
        })
            .then(function (response) {

                const data = response?.data;

                resolve(data);
                return data;

            })
            .catch(function (e) {

                console.log('axios error', fullURL)
                console.log(e)

            })

    });

}
export const POST = async (path= "",params={}) =>{


    const fullURL = URL+path;
    return new Promise((resolve, reject) => {

        axios.post(fullURL, params, {
            headers: headers
        }).then(function (response) {

            const data = response?.data;

            resolve(data);
            return (data && data.length > 0) ? data.json() : data;

        })
            .catch(function (e) {
                console.log("Error PATH : ",path ," - MESSAGE :  ",e);

                let dtError = { status: false , error: "An error happened, please check again"};
                resolve(dtError);
                return dtError

            })
            .finally(function () {

            })

    });

}
