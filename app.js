const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('3')
})

// eslint-disable-next-line no-unused-vars
app.get('/health', (_req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error('Testing failed health check...')
  // res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
