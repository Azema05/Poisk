const API = 'https://api.github.com/users/'

const form = document.querySelector('form')
const input = document.getElementById('inp')
const btn = document.querySelector('button')
const output = document.getElementById('output')


const searchUsers = async () => {
    let request = await fetch(API + input.value)
    let response = await request.json()
    renderUser(response)
    input.value = ''
}

const renderUser = (user) => {
    output.innerHTML = ''
    console.log(user);
    const avatar = document.createElement('img')
    avatar.src = user.avatar_url
    avatar.addEventListener('click', () => document.location.href = user.html_url)
    const login = document.createElement('h2')
    login.textContent = user.login
    const followers = document.createElement('p')
    const following = document.createElement('p')
    followers.textContent = 'Followers: ' + user.followers
    following.textContent = 'Folowing: ' + user.following

    output.append(avatar, login, followers, following)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchUsers()
})


