export const locService = {
    getLocs,
    getLocation,
}

const API_KEY = 'AIzaSyDCNE344_lv4Mvr0Ne4-Qqi_lA7vxB5NVU'

const locs = [
    { name: 'Greatplace', lat: 32.047104, lng: 34.832384 },
    { name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
]

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs)
        }, 2000)
    })
}

function getLocation(location) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY}
`)
        .then(res => {
            // console.log(res.data.results[0])
            // console.log('res:', res.data.results)
            return res.data.results[0]
        }).then(res => ({
            lng: res.geometry.location.lng,
            lat: res.geometry.location.lat,
            country: res.address_components.filter(res => res.types.includes('country'))[0].long_name,
            city: res.address_components.filter(res => res.types.includes('locality'))[0].long_name,
            streetAdress: res.address_components.filter(res => res.types.includes('route'))[0].long_name,
        }))
        .catch(err => {
            console.log(err)
            throw err
        })
        .finally(() => console.log('After video location'))
}


