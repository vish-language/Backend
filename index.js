require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000
const gitUserData = {
    "login": "vish-language",
    "id": 182799866,
    "node_id": "U_kgDOCuVN-g",
    "avatar_url": "https://avatars.githubusercontent.com/u/182799866?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vish-language",
    "html_url": "https://github.com/vish-language",
    "followers_url": "https://api.github.com/users/vish-language/followers",
    "following_url": "https://api.github.com/users/vish-language/following{/other_user}",
    "gists_url": "https://api.github.com/users/vish-language/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vish-language/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vish-language/subscriptions",
    "organizations_url": "https://api.github.com/users/vish-language/orgs",
    "repos_url": "https://api.github.com/users/vish-language/repos",
    "events_url": "https://api.github.com/users/vish-language/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vish-language/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-09-25T16:42:00Z",
    "updated_at": "2025-03-25T16:53:45Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req , res) => {
    res.send('Please login to the labour.chawk')
})

app.get('/youtube' , (req , res) => {
    res.send("<h1>Go on youtube and search The Vishal Vichaar")
})

app.get('/gitUserData' , (req , res) =>{
    res.json(gitUserData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

