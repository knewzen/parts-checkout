import {Router} from 'express'
import jwt from 'jsonwebtoken'
import chalk from 'chalk'
import bcrypt from 'bcrypt'
import db from '../../database'
import asyncMiddleware from '../../asyncMiddleware'

const saltRounds = 10
// import {JWT_TOKEN} from 'common/api'
// {isLength, trim, isAlphanumeric, escape}
const router = Router()

// Define the signup route
router.post('/', asyncMiddleware(async (req, res, next) => {
    const {username, password, password2} = req.body
    const data = { username }
    console.log(username + ' ' + password + ' ' + password2)

    if (password !== password2) {
        res.status(500).json({error: 'Passwords do not match'})
    }
    const hash = await bcrypt.hash(password, saltRounds)
    console.log(chalk.yellow(hash))

    try {
        await db.createUser({
            username,
            hash
        })
        jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '7d'}, (err, token) => {
            if (err) {
                throw new Error(
                    `Cant create JWT token based on input data: ${JSON.stringify(data)}`,
                    err
                )
            }
            console.log(chalk.yellow(`Generated token for user: ${data.username}`))
            res.json({token})
        })
    } catch (e) {
        console.log(chalk.red(e))
        res.status(500).json({error: 'Username is already taken'})
    }
}))

export default router
