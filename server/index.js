const express = require('express')
const consola = require('consola')
const cors = require('cors')
const { Nuxt, Builder } = require('nuxt')
const app = express()

app.use(cors());
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const city = require('./node/api/city');
const coronadata = require('./node/api/coronadata');
async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // Give nuxt middleware to express
  app.use(nuxt.render)

  app.get('api/templates', function(req, res) {
    return res.send('GET HTTP method on user resource');
  })

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
  var minutes = 5, the_interval = minutes * 60 * 1000;
  setInterval(function() {
    console.log("Collect data after 5 minute");
  }, the_interval);
}

start()
