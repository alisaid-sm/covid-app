import axios from 'axios'

export const GET_ALL_COUNTRIES = () => {
    return {
        type: 'GET_ALL_COUNTRY',
        payload: new Promise ((resolve, reject) => {
            axios.get(`https://api.covid19api.com/countries`)
                .then((response) => {
                    resolve(response.data)
                }).catch((err) => {
                    console.log(err)
                })
        })
    }
    
}