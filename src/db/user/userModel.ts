import * as mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

// Schema
const usersSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username不能为空']
    },
    password: {
        type: String,
        required: [true, 'password不能为空']
    },
    salt: String,
    roles: {
        type: String,
        enum: ["user", "super", "admin"],
        default: 'user'
    }
})

// Model
export const users = mongoose.model('users', usersSchema);
