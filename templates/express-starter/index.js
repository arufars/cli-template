import app from './src/app.js'

// server
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`[⚡] Server running on port ${port}]`)
  // import your db connection here and connect to it from utils/connectDB.js
})
