import {Router} from 'express'
import jwt from 'jsonwebtoken'
import chalk from 'chalk'
import bcrypt from 'bcrypt'
import db from '../../database'
import asyncMiddleware from '../../asyncMiddleware'

// import {JWT_TOKEN} from 'common/api'
// {isLength, trim, isAlphanumeric, escape}
const router = Router()

// Define the home page route
router.post('/', asyncMiddleware(async (req, res, next) => {
    const {username, password} = req.body
    const data = { username }
    console.log(username + ' ' + password)

    try {
        const ans = await db.authUser({
            username
        })
        console.log('ans: ' + JSON.stringify(ans))
        if (await bcrypt.compare(password, ans.hash)) {
            console.log(chalk.green('passwords match'))
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
        } else {
            console.log(chalk.red('passwords do not match'))
            res.status(500).json({error: 'Bcrypt username or password'})
        }
    } catch (e) {
        console.log('Error: ' + chalk.red(e))
        res.status(500).json({error: 'Incorrect username or password'})
    }
}))

export default router
