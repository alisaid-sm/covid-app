import axios from 'axios'

export const GET_DETAIL_CORONA = () => {
    return {
        type: 'GET_DETAIL_CORONA',
        payload: new Promise ((resolve, reject) => {
            axios.get(`https://api.covid19api.com/total/country/indonesia`)
                .then((response) => {
                    resolve(response.data)
                }).catch((err) => {
                    console.log(err)
                })
        })
    }
    
}