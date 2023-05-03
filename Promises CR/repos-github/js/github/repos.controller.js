'use strict'


function onInit() {
    askForUsers()
        .then((res) => renderUsers(res))


}

function renderUsers(users) {
    console.log('users', users)
    let elUsers = document.querySelector('.users-container')
    const strHTMLs = users.map(user => {
        return `
        <div class="user">
            <h3>name: ${user.username}</h3>
            <span>repos count: ${user.reposCount}</span>
            
            <img src="${user.imgUrl}" alt="">
        </div>
        `
    })
    elUsers.innerHTML = strHTMLs.join('')

}
