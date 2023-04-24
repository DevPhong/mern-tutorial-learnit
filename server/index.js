const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRouter = require('./routes/auth')
const postsRouter = require('./routes/post')
const cors = require('cors');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mern-learnit')
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
connectDB()

const app = express()
app.use(express.json())
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

