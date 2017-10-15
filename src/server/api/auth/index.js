import {Router} from 'express'
import jwt from 'jsonwebtoken'
import chalk from 'chalk'
import bcrypt from 'bcrypt'

const saltRounds = 10
// import {JWT_TOKEN} from 'common/api'
// {isLength, trim, isAlphanumeric, escape}
const router = Router()

// Define the home page route
router.post('/', (req, res) => {
	const {username, password} = req.body
	const data = { username }
	var hash = bcrypt.hashSync(password, saltRounds)
	console.log(chalk.yellow(hash))

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
})

export default router
