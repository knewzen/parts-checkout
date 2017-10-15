import {Router} from 'express'
import jwt from 'jsonwebtoken'
import chalk from 'chalk'
import bcrypt from 'bcrypt'
import db from '../../database'

const saltRounds = 10
// import {JWT_TOKEN} from 'common/api'
// {isLength, trim, isAlphanumeric, escape}
const router = Router()

// Define the signup route
router.post('/', (req, res) => {
	const {username, password, password2} = req.body
	const data = { username }
	console.log(username + ' ' + password + ' ' + password2)

	if (password !== password2) {
		res.status(500).json({error: 'passwords do not match'})
	}
	let hash = bcrypt.hashSync(password, saltRounds)
	console.log(chalk.yellow(hash))
	db.createUser({
		username: username,
		password: hash
	})
		.then(
			(ans) => {
				if (ans) {
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
					res.status(500).json({error: 'Username is already taken'})
				}
			}
		)
})

export default router
