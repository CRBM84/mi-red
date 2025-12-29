import mongoose from 'mongoose'
import { User, Recommend, Comment, Country, City, Destination } from './models.js'
import './mongoose-plus.js'

// Configure Mongoose global settings for v9 compatibility
mongoose.set('strictQuery', false);

const db = {
    connect: (uri, options) => mongoose.connect(uri, options),
    disconnect: () => mongoose.disconnect()
}

export default db

export {
    User,
    Recommend,
    Comment,
    Country,
    City,
    Destination
}