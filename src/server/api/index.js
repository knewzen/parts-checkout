import {Router} from 'express'
import auth from './auth'
import signup from './signup'
const router = Router()

router.use('/auth', auth)
router.use('/signup', signup)

export default router
