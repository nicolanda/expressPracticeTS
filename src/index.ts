import express from 'express'
import diaryRouter from './routes/diaries.routes'

const app = express()

// middleware
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
