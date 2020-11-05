import axios from 'axios'

export const GET_DETAIL_CORONA = (val) => {
    const country = val === undefined? '' : val
    return {
        type: 'GET_DETAIL_CORONA',
        payload: new Promise ((resolve, reject) => {
            axios.get(`https://api.covid19api.com/total/country/${country}`)
                .then((response) => {
                    resolve(response.data)
                }).catch((err) => {
                    console.log(err)
                })
        })
    }
    
}