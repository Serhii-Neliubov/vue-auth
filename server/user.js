import mongoose from 'mongoose';

const RegisterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    isRemembered: { type: Boolean, required: true },
});

export const RegisterUser = mongoose.model('RegisterUser', RegisterSchema);
export const LoginUser = mongoose.model('LoginUser', LoginSchema);
