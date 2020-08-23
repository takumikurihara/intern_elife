const functions = require('firebase-functions')
const express = require('express')
const requestIp = require('request-ip')
const ipRangeCheck = require('ip-range-check')
const is = require('is_js')

const ALLOWIPS = [
  '127.0.0.1', // local
  '124.32.97.226', // 広尾
  '202.248.186.14' // Fenics VPN
]

const app = express()

// IP Filter
app.all('/*', (req, res, next) => {
  const client_ip_fastly = req.headers["fastly-client-ip"]
  const clientIp = is.ip(client_ip_fastly) ? client_ip_fastly : requestIp.getClientIp(req)
  ipRangeCheck(clientIp, ALLOWIPS)
    ? next()
    : res.status(404).send('Not Found')
})

app.use(express.static(__dirname + '/dist/'))
exports.firebaseIpFilter = functions.https.onRequest(app)
