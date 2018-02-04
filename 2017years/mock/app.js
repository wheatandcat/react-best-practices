"use strict"

const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("mock/db.json")
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.post("/sigin", (req, res) => {
  res.jsonp({
    token: "7J6gSuyj7J6gSuyj7J6gSuyj7J6gSuyj7J6gSuyj",
  })
})

server.post("/auth", (req, res) => {
  res.jsonp({
    signed: "true",
  })
})

server.use(router)

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log("JSON Server is running")
})
