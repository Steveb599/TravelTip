'use strict'

const url = 'https://api.github.com/users'
const STORAGE_KEY = 'usersDB'
const userCache = loadFromStorage(STORAGE_KEY) || []

function askForUsers() {
    if (userCache && userCache.length) {
        console.log('from chaching 😎')
        return Promise.resolve(userCache)
    } else {
        console.log('from AXIOS :(');
        return axios.get(url)
            .then(res => {
                // console.log('res', res)
                const users = res.data
                const prmUsers = users.map(user => getUserInfo(user))
                // console.log('prmUsers', prmUsers)
                return Promise.all(prmUsers)
            })
            .then(users => {
                // console.log('users', users)
                saveToStorage(STORAGE_KEY, users)
                return users
            })
            .catch(console.error)
    }

}

function getUserInfo(user) {
    //Main: return obj user - clean (username, imgUrl, reposCount)

    //DONE: use axios to get repos count
    return axios.get(user.repos_url)
        .then((res) => {
            // console.log(res.data.length)
            //DONE:build nicly obj for controller
            return {
                username: user.login,
                imgUrl: user.avatar_url,
                reposCount: res.data.length
            }
        })
        .catch(console.error)

}
