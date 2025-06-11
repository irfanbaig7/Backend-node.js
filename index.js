console.log("Irfan learn about Backend Now !!");


require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "irfanbaig7",
  "id": 135935267,
  "node_id": "U_kgDOCBo1Iw",
  "avatar_url": "https://avatars.githubusercontent.com/u/135935267?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/irfanbaig7",
  "html_url": "https://github.com/irfanbaig7",
  "followers_url": "https://api.github.com/users/irfanbaig7/followers",
  "following_url": "https://api.github.com/users/irfanbaig7/following{/other_user}",
  "gists_url": "https://api.github.com/users/irfanbaig7/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/irfanbaig7/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/irfanbaig7/subscriptions",
  "organizations_url": "https://api.github.com/users/irfanbaig7/orgs",
  "repos_url": "https://api.github.com/users/irfanbaig7/repos",
  "events_url": "https://api.github.com/users/irfanbaig7/events{/privacy}",
  "received_events_url": "https://api.github.com/users/irfanbaig7/received_events",
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
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-06-08T03:11:27Z",
  "updated_at": "2025-05-03T03:53:19Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Byye Byee tension')
})

app.get('/bknd' , (req, res) => {
    res.send('Learn Backend')
})

app.get('/login', (req, res) => {
    res.send('<h1>This is new Journey</h1>')
})

app.get('/logout', (req, res) => {
    res.send('<p>This is new Logout Features</p>')
})

app.get('/bkt', (req, res) => {
    res.send('<p>This is BKT</p>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
